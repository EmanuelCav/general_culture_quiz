import { Request, Response } from 'express';
import fs from 'fs-extra';

import Question from '../models/question';
import Category from '../models/category';
import Statistic from '../models/statistic';
import Game from '../models/game';
import User from '../models/user';
import Image from '../models/image';

import { shuffle } from '../helper/functions';
import { cloud } from '../helper/image/cloud';

import { IQuestion } from '../interface/Question';

import { folder_cloud } from '../config/config';

export const allQuestions = async (req: Request, res: Response): Promise<Response> => {

    try {

        const questions = await Question.find()

        return res.status(200).json(questions)

    } catch (error) {
        throw error
    }

}

export const questionsCategory = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const category = await Category.findById(id)

        if (!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const questions = await Question.find({ category: id })

        return res.status(200).json({
            questions,
            length: questions.length
        })

    } catch (error) {
        throw error
    }

}

export const questionsGame = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const game = await Game.findById(id)

        if (!game) {
            return res.status(400).json({ message: "Game does not exists" })
        }

        const user = await User.findById(req.user).select("-code")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const statistics = await Statistic.find({ user: req.user, isSelect: true })

        let categories = []

        for (let i = 0; i < statistics.length; i++) {
            categories.push(statistics[i].category)
        }

        const questions = await Question.find({ category: categories })

        let shuffleQuestions: IQuestion[];

        if (user.isImage) {
            shuffleQuestions = shuffle(questions)
        } else {
            shuffleQuestions = shuffle(questions).filter((sq: IQuestion) => sq.image === undefined)
        }


        for (let i = 0; i < 5; i++) {

            await Game.findByIdAndUpdate(id, {
                $push: {
                    questions: shuffleQuestions[i]._id
                }
            }, {
                new: true
            })

        }

        const gameGenerated = await Game.findById(id)
            .populate({
                path: "questions",
                populate: {
                    path: "category"
                }
            })
            .populate({
                path: "questions",
                populate: {
                    path: "image",
                    select: "image"
                }
            })

        if (!gameGenerated) {
            return res.status(400).json({ message: "Game does not exists" })
        }

        return res.status(200).json({
            game: gameGenerated,
            questions: shuffleQuestions
        })

    } catch (error) {
        throw error
    }

}

export const createQuestion = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { question, answer, isAllOptions } = req.body

    try {

        const category = await Category.findById(id)

        if (!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        let imageSaved

        if (req.file) {
            const result = await cloud.uploader.upload(req.file.path, {
                use_filename: true,
                folder: `${folder_cloud}`
            })

            const newImage = new Image({
                image: result.secure_url,
                imageId: result.public_id
            })

            imageSaved = await newImage.save()

            await fs.unlink(req.file.path)
        }

        const newQuestion = new Question({
            question,
            category: id,
            answer,
            isAllOptions: isAllOptions && true,
            image: imageSaved && imageSaved._id
        })

        const questionSaved = await newQuestion.save()

        return res.status(200).json({
            message: "Question created successfully",
            question: questionSaved
        })

    } catch (error) {
        throw error
    }

}

export const generateQuestion = async (req: Request, res: Response) => {

    const { gid, qid } = req.params

    try {

        const game = await Game.findById(gid)

        if (!game) {
            return res.status(400).json({ message: "Game does not exists" })
        }

        const question = await Question.findById(qid)

        if (!question) {
            return res.status(400).json({ message: "Question does not exists" })
        }

        const gameUpdated = await Game.findByIdAndUpdate(gid, {
            $push: {
                questions: qid
            }
        }, {
            new: true
        })
            .populate({
                path: "questions",
                populate: {
                    path: "category"
                }
            })
            .populate({
                path: "questions",
                populate: {
                    path: "image",
                    select: "image"
                }
            })

        return res.status(200).json(gameUpdated)

    } catch (error) {
        throw error
    }

}

export const pushOption = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const question = await Question.findById(id)

        if (!question) {
            return res.status(400).json({ message: "Question does not exists" })
        }

        // const options = ["Italia", "Francia", "España", "Portugal", "Suiza", "Austria", "Croacia", "Grecia", "Suecia", "Bélgica"]
        // let options = ["50", "44", "38", "56", "62", "68", "74", "80", "32", "26"]
        // const options = ["Monte Everest", "K2", "Kanchenjunga", "Kilimanjaro", "Pico Dufour", "Lhotse I", "Aconcagua", "Mont Blanc", "Teide", "Manaslu"]
        // let options = ["Chichén Itzá", "Taj Mahal", "Coliseo Romano", "Alhambra", "Acrópolis de Atenas", "Burj Khalifa", "Basílica de San Pedro", "Torre Eiffel", "Machu Picchu", "Fushimi Inari", "Kremlin", "Muralla China", "El Partenón", "Newgrange", "Tesoro de Atreo", "Stonehenge"]
        // let options = ["Río Sena", "Río Danubio", "Río Loira", "Río Rin", "Río Ural", "Río Tajo", "Río Duero", "Río Dniéster", "Río Ródano", "Río Kama", "Río Támesis", "Río Vístula", "Río Dniéper", "Río Ebro"]
        // let options = ["Teherán", "Doha", "Bagdad", "Damasco", "Amman", "Isfahán", "Mashhad", "Beirut", "Yazd", "Taskent", "Mosul", "Alepo", "Islamabad", "Rasht", "Qazvín"]
        // let options = ["Guinea Ecuatorial", "Argelia", "Nigeria", "Sudáfrica", "Camerún", "Chad", "Burkina Faso", "Malí", "Ghana", "Egipto", "Marruecos", "Túnez", "Tanzania", "Etiopía", "Guinea", "Sudán", "Somalia", "Cabo Verde", "Malaui", "Uganda", "Ruanda", "Níger", "Kenia", "Libia"]
        // let options = ["Perú", "México", "Egipto", "Indonesia", "Reino Unido", "Rusia", "Brasil", "Guatemala", "Sudáfrica", "Irak", "Siria", "Jordania", "Turquía", "Etiopía", "Chile"]
        // let options = ["Monte Elbrús", "Mont Blanc", "Teide", "Comapedrosa", "Zugspitze", "Mulhacén", "Pico Dufour", "Grossglockner", "Ben Nevis", "Monte Korab"]
        // let options = ["Mar Caspio", "Lago Superior", "Lago Victoria", "Lago Hurón", "Lago Míchigan", "Lago Tanganica", "Lago Malawi", "Lago Ontario", "Lago Ládoga", "Mar de Aral", "Lago Maracaibo", "Laguna de los Patos"]
        // let options = ["Río Amazonas", "Río Nilo", "Río Paraná", "Río Yangtsé", "Río Misisipi", "Río Amarillo", "Río Iguazú", "Río Tietê", "Río Paranaíba", "Río Mekong", "Río Kasai", "Río Níger", "Río Obi", "Río Congo", "Río Amur"]
        // let options = ["Argentina", "Perú", "México", "Chile", "Colombia", "España", "El Salvador", "Venezuela", "Bolivia", "Paraguay", "Guatemala"]
        // let options = ["Real", "Euro", "Dólar", "Peso", "Rublo", "Franco", "Yen", "Rupia", "Libra", "Yuan", "Zloty", "Lira", "Dinar", "Riyal", "Rial", "Rand", "Won"]
        // let options = ["Brasilia", "Río de Janeiro", "Porto Alegre", "Belo Horizonte", "Manaos", "Recife", "São Paulo", "Curitiba", "Fortaleza", "Salvador de Bahía", "Florianópolis", "Natal", "Goiânia", "Cuiabá"]
        // let options = ["Mar Egeo", "Mar Mediterráneo", "Mar Amarillo", "Mar Negro", "Mar Arábigo", "Mar de Japón", "Mar Blanco", "Mar Báltico", "Mar de Mármara", "Mar Jónico", "Mar Rojo", "Mar de Filipinas", "Mar Adriático", "Mar Tirreno", "Mar del Norte", "Mar de Azov", "Mar de Noruega"]
        // let options = ["Desierto Antártico", "Desierto del Sahara", "Desierto Ártico", "Desierto de Arabia", "Desierto de Gobi", "Desierto de Kalahari", "Desierto Patagónico", "Desierto de Chihuaha", "Desierto de Siria", "Desierto de la Gran Cuenca", "Desierto de Sonora", "Desierto del Colorado", "Desierto de Atacama", "Desierto de La Guajira", "Gran Desierto Arenoso"]
        // let options = ["Estrecho de Bering", "Estrecho de Palk", "Estrecho de Taiwán", "Estrecho de Gibraltar", "Estrecho de Magallanes", "Golfo de Bengala", "Golfo de Guinea", "Golfo Pérsico", "Golfo de Vizcaya", "Bahía de San Francisco", "Bahía de Fundy", "Estrecho de Malaca"]
        // let options = ["Isla de Pascua", "Isla de Navidad", "Islas Pitcairn", "Islas Galápagos", "Islas Cook", "Isla Grande de Chiloé", "Madagascar", "Isla de Hawái", "Isla de Sajalín", "Isla de Vancouver", "Isla Baker"]
        // let options = ["Aconcagua", "Nevado Ojos del Salado", "Monte Pissis", "Nevado Sajama", "Llullaillaco", "Denali", "Monte Logan", "Citlaltépetl", "Cerro Mercedario", "Chimborazo", "Huascarán Sur", "Popocatépetl"]
        // let options = ["Francés", "Alemán", "Español", "Portugués", "Árabe", "Ruso", "Holandés", "Italiano", "Danés", "Sueco", "Inglés"]
        // let options = ["Suiza", "Alemania", "Francia", "Hungría", "España", "Paises Bajos", "Bélgica", "Dinamarca", "Reino Unido", "Suecia", "Chequia", "Eslovenia", "Italia", "Portugal", "Austria", "Polonia", "Ucrania", "Rusia", "Noruega", "Eslovaquia", "Rumania", "Bulgaria", "Croacia", "Albania", "Serbia"]
        // let options = ["Oslo", "Bruselas", "Ámsterdam", "Berlín", "Viena", "Praga", "Berna", "Ginebra", "Róterdam", "Hamburgo", "Ulm", "Malmö", "Utrecht", "Estocolmo", "Copenhague", "Helsinki", "Budapest", "Bucarest", "Skopie", "Sofía", "Tirana", "Zagreb", "Eindhoven"]

        // let options = ["1992", "1996", "1988", "2000", "1984", "1980", "1976", "1972", "1968", "1964"]
        // let options = ["Uruguay", "Alemania", "Brasil", "Argentina", "Colombia", "Paises Bajos", "Italia", "Francia", "Estados Unidos", "México", "Inglaterra", "España", "Portugal", "Rusia"]
        // let options = ["Real Madrid", "Barcelona", "Milan", "Ajax", "Liverpool", "Manchester City", "Manchester United", "Arsenal", "Inter", "Bayern Munich", "Atletico Madrid", "Chelsea", "Porto", "Sevilla"]
        // let options = ["Nápoli", "Milan", "Inter", "Fiorentina", "Juventus", "Torino", "Bologna", "Lazio", "Roma", "Atalanta", "Udinese", "Bari", "Pisa", "Genoa", "Catania"]
        // let options = ["Rafael Nadal", "Jimmy Connors", "Novak Djokovic", "Roger Federer", "Andy Murray", "Pete Sampras", "Roy Emerson", "Rod Laver", "Björn Borg", "Bill Tilden", "John McEnroe", "Andre Agassi", "Ivan Lendl"]
        // let options = ["Boxeo", "Atletismo", "Tenis", "Críquet", "Natación", "Golf", "Fútbol", "Motociclismo", "Automovilismo", "Ciclismo", "Básquet", "Equitación", "Pentatlón", "Remo", "Vela", "Voleibol", "Balonmano", "Hockey", "Rugby", "Judo", "Esgrima", "Tiro con arco", "Tenis de mesa"]
        // let options = ["All Blacks", "Wallabies", "Pumas", "Springboks", "Rosas", "Bleus", "Azurri", "Lelos", "Trébol", "Robles"]
        // let options = ["Sudáfrica", "Nueva Zelanda", "Australia", "Argentina", "Irlanda", "Inglaterra", "Gales", "Escocia", "Italia", "Francia", "Fiyi"]
        // let options = ["Francia", "Estados Unidos", "Portugal", "Japón", "Países Bajaos", "España", "Argentina", "Brasil", "Alemania", "Inglaterra", "Italia", "Canadá"]
        // let options = ["Negro", "Blanco", "Azul", "Rojo", "Amarillo", "Violeta", "Verde", "Naranja", "Gris", "Rosa", "Marrón"]
        // let options = ["Césped", "Arcilla", "Dura", "Moqueta", "Madera", "Barro", "Arena", "Metal", "Plástico", "Acero"]
        // let options = ["Love", "Match Point", "Servicio", "Deuce", "Net", "Ace", "Revés", "Smash", "Drop", "Let"]
        // let options = ["LeBron James", "Karl Malone", "Kareem Abdul-Jabbar", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal", "Wilt Chamberlain", "Dirk Nowitzki", "Kevin Durant", "Tim Duncan", "Oscar Robertson", "Moses Malone"]
        // let options = ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors", "San Antonio Spurs", "Detroit Pistons", "Miami Heat", "Philadelphia 76ers", "Houston Rockets", "New York Knicks", "Milwaukee Bucks", "Toronto Raptors", "Dallas Mavericks"]
        // let options = ["Líbero", "Hooker", "Zaguero", "Armador", "Rematador", "Wing", "Apertura", "Alero", "Pívot", "Pilar"]
        // let options = ["Independiente", "River Plate", "Boca Juniors", "Flamengo", "Peñarol", "Nacional", "Palmeiras", "São Paulo", "Olimpia", "Gremio", "Santos", "Liga de Quito", "Colo Colo"]
        // let options = ["12", "10", "14", "13", "11", "6", "7", "8", "9", "15"]
        // let options = ["Manny Pacquiao", "Muhammad Ali", "Sugar Ray Robinson", "Joe Louis", "Julio César Chávez", "Floyd Mayweather", "Carlos Monzón", "Archie Moore", "Sugar Ray Leonard", "Alexis Argüello", "Mike Tyson", "Rocky Marciano", "Willie Pep", "Salvador Sánchez", "Emile Griffith"]
        // let options = ["Atenas", "Estocolmo", "Nueva York", "Berlín", "Toronto", "Pekín", "París", "Londres", "Oslo", "Barcelona", "Los Ángeles", "Tokio", "Ámsterdam"]
        // let options = ["Braza", "Mariposa", "Crol", "Dorso", "Salto", "Ventral", "Fosbury", "Erguido", "Crochet", "Cruzado"]
        // let options = ["Brasil y Uruguay", "Brasil y Argentina", "Brasil y Inglaterra", "Brasil y Chile", "Brasil y Alemania", "Brasil y España", "Brasil y Colombia", "Brasil y Paraguay", "Brasil y Italia", "Brasil y Hungría"]
        // let options = ["Camp Nou", "Santiago Bernabéu", "Allianz Arena", "Wembley", "Estadio Azteca", "Cívitas Metropolitano", "Benito Villamarín", "Mestalla", "Reale Arena", "San Mamés"]

        // let options = ["George Washington", "John Adams", "John F. Kennedy", "Harry S. Truman", "Abraham Lincoln", "Thomas Jefferson", "James Madison", "Franklin D. Roosevelt", "Bill Clinton", "Andrew Jackson", "James K. Polk", "Martin Van Buren", "Grover Cleveland"]
        // let options = ["Gengis Kan", "Mao Zedong", "Iósif Stalin", "Alejandro Magno", "Carlomagno", "Julio César", "Augusto", "Ciro II", "Dario I", "Nabucodonosor II", "Ptolomeo I", "Aristóteles", "Pompeyo", "Cicerón", "Atila", "Hefestión"]
        // let options = ["Constantino", "Augusto", "Nerón", "Calígula", "Tiberio", "Vespasiano", "Domiciano", "Trajano", "Antonino Pío", "Cómodo", "Tito", "Marco Aurelio", "Tácito", "Adriano", "Claudio"]
        // let options = ["Francisco Pizarro", "Hernán Cortés", "Fernando de Magallanes", "Vasco da Gama", "Américo Vespucio", "Jacques Cartier", "Marco Polo", "James Cook", "Bartolomeu Dias", "Enrique el Navegante", "Francis Drake", "Cristóbal Colón"]
        // let options = ["Batalla de Waterloo", "Batalla de Verdún", "Batalla de Moscú", "Batalla del Somme", "Batalla de Stalingrado", "Batalla de Berlín", "Batalla de Mukden", "Batalla de Jena", "Batalla de Leipzig", "Batalla de Friedland"]
        // let options = ["Caída del muro de Berlín", "Asesinato de Francisco Fernando", "Caída del Imperio Otomano", "Disolución de Yugoslavia", "Revolución rusa", "Bombardeos en Hiroshima", "Batalla de Stalingrado", "Día D", "Asesinato de Trotski", "Asesinato de Abraham Lincoln", "Batalla de Waterloo"]
        // let options = ["Tratado de Versalles", "Tratado de Kars", "Tratado de Traventhal", "Tratado de Ulm", "Tratado de Hubertusburgo", "Paz de Augsburgo", "Tratado de Ancón", "Acuerdo de Brioni", "Acuerdo de Kumanovo", "Tratado de Heiligen", "Paz de Dresde"]
        // let options = ["Nicolás II", "Pablo I", "Iván VI", "Pedro II", "Alejandro III", "Paul von Hindenburg", "Otto von Bismarck", "Vladimir Lenin", "Iósif Stalin", "Benito Mussolini", "Lev Trotski", "Winston Churchill", "Leonid Brézhnev", "Karl Marx"]
        // let options = ["Constantinopla", "Alejandría", "Bagdad", "Lúxor", "Guiza", "Atenas", "Roma", "Sofía", "Skopie", "Corinto", "Troya", "Argos"]
        // let options = ["Imperio bizantino", "Imperio otomano", "Imperio británico", "Imperio ruso", "Imperio mongol", "Imperio español", "Imperio austrohúngaro", "Imperio persa", "Califato ortodoxo", "Califato omeya"]
        // let options = ["Atahualpa", "Huáscar", "Huayna Cápac", "Cuitlahuac", "Cuauhtémoc", "Tízoc", "Chimalpopoca", "Acamapichtli", "Ahuitzotl", "Sinchi Roca"]
        // let options = ["San Pedro", "Clemente I", "Lino", "Anacleto", "Pío I", "Alejandro I", "Sotero", "Aniceto", "Ceferino", "Calixto I", "Eusebio"]
        // let options = ["Martín Lutero", "Erasmo de Róterdam", "Juan Calvino", "Nicolás Maquiavelo", "Dante Alighieri", "Enrique VIII", "William Tyndale", "Thomas Cranmer", "León X", "Wilhelm Wundt"]
        // let options = ["Guerra de los Cien Años", "Primera Guerra Mundial", "Segunda Guerra Mundial", "Guerra de los Siete Años", "Guerra de los Treinta Años", "Guerra de los Dos Rosas", "Guerras napoleónicas", "Primera cruzada", "Batalla de Hastings", "Guerra livonia", "Guerra de los Trece Años", "Batalla de Varna"]
        // let options = ["Revolución francesa", "Guerra de los Cien Años", "Primera Guerra Mundial", "Segunda Guerra Mundial", "Primera cruzada", "Caída del Muro de Berlín", "Disolución de la Unión Soviética", "Descubrimiento de América", "Caída del Imperio Romano", "Renacimiento", "Revolución Industrial", "Llegada del hombre a la Luna", "Revolución rusa", "Guerra Fría"]
        // let options = ["Invensión de la escritura", "Domesticación del fuego", "Caída de Constantinopla", "Aparición de los primeros homínidos", "Desarrollo de herramientas de piedra", "Migración fuera de África", "Megalitismo", "Desarrollo de la cerámica", "Primera cruzada", "Desarrollo de la metalurgia"]
        // let options = ["Julio César", "Augusto", "Marco Antonio", "Cesarión", "Cicerón", "Tiberio", "Marco Aurelio", "Cómodo", "Espartaco", "Claudio", "Calígula"]
        // let options = ["Persas", "Celtas", "Romanos", "Hunos", "Eslavos", "Otomanos", "Vikingos", "Galos", "Bizantinos", "Teutones"]
        // let options = ["Siglo VII", "Siglo V", "Siglo III", "Siglo I", "Siglo IX", "Siglo VII", "Siglo X", "Siglo XI", "Siglo XII", "Siglo XV"]

        // let options = ["Pingüino", "Murciélago", "Buitre", "Gaviota", "Cacatúa", "Golondrina", "Urraca", "Lechuza", "Flamenco", "Colibrí"]
        // let options = ["Abeja", "Avispa", "Cigarra", "Luciérnaga", "Crisopa", "Tábano bovino", "Carcoma", "Tijereta", "Chinche de la malva", "Libélula vulgar"]
        // let options = ["Ballena azul", "Tiburón blanco", "Calamar gigante", "Jirafa", "Elefante", "Anaconda", "Rorcual común", "Cachalote", "Orca", "Oso polar"]
        // let options = ["Camaleón", "Cobra", "Lagarto tizón", "Lución", "Pitón", "Dragón de Komodo", "Lagartija", "Iguana", "Yacaré", "Tuátara"]
        // let options = ["Estribo", "Fémur", "Tibia", "Fíbula", "Costillas", "Ulna", "Húmero", "Escápula", "Clavícula", "Radio", "Pubis", "Esternón"]
        // let options = ["8", "6", "5", "14", "12", "10", "9", "11", "13", "7"]
        // let options = ["Artritis", "Otitis", "Salmonelosis", "Tonsilitis", "Meningitis", "Laringitis", "Conjuntivitis", "Bronquitis", "Cistitis", "Faringitis", "Rinitis", "Sinusitis", "Enterocolitis"]
        // let options = ["Nucleótido", "Plaqueta", "Mitocondria", "Citoplasma", "Polímero", "Péptido", "Monosacárido", "Centríolos", "Ribosomas", "Pentosa"]
        // let options = ["Sistema digestivo", "Sistema circulatorio", "Sistema inmunológico", "Sistema respiratorio", "Sistema nervioso", "Sistema endocrino", "Sistema locomotor", "Sistema excletor", "Sistema reproductor", "Sistema linfático", "Sistema urinario", "Sistema óseo"]
        // let options = ["Koala", "León", "Gato", "Perro", "Cocodrilo", "Ornitorrinco", "Oso", "Tigre", "Cebra", "Elefante", "Jirafa", "Orangután", "Lobo", "Chita", "Camello", "Liebre", "Caballo", "Cabra", "Cerdo", "Vaca", "Oveja", "Leopardo", "Toro"]
        // let options = ["Intestino delgado", "Médula ósea", "Páncreas", "Hígado", "Piel", "Riñón", "Corazón", "Pulmones", "Estómago", "Bazo", "Útero", "Cerebro", "Próstata", "Ovarios", "Timo", "Vejiga", "Intestino grueso", "Timpo", "Testículos", "Esófago"]
        // let options = ["Mitocondria", "Núcleo", "Lisosomas", "Microtubulo", "Centríolos", "Aparato de Golgi", "Ribosomas", "Retículo endoplasmático rugoso", "Retículo endoplasmático liso", "Nucléolo"]
        // let options = ["Glúteo mayor", "Sartorio", "Deltoide", "Bicep", "Tricep", "Diafragma", "Risorio", "Trapecio", "Cuadricep", "Isquiotibial", "Abdominales", "Pectoral mayor", "Gastrocnemio", "Sóleo"]
        // let options = ["Tendón", "Epitelio", "Miocito", "Citoplasma", "Neurona", "Lisosomas", "Centríolos", "Ribosomas", "Microtubulo", "Mitocondria"]
        // let options = ["Glóbulos blancos", "Monocitos", "Plaquetas", "Fibroblastos", "Neurona", "Neutrófilo", "Glóbulos rojos", "Óvulo", "Melanocitos", "Megacariocito", "Adipocito", "Célula muscular lisa", "Espermatozoide", "Vorticella"]
        // let options = ["Edward Jenner", "Alexander Fleming", "Charles Darwin", "Jean-Baptiste Lamarck", "Alfred Russel Wallace", "Sigmund Freud", "Isaac Newton", "Gregor Mendel", "Louis Pasteur", "Marie Curie", "Anton van Leeuwenhoek", "Ernst Mayr", "Antoine Lavoisier", "Francesco Redi", "Robert Koch", "Robert Brown", "Joseph Lister", "William Harvey", "Robert Boyle"]
        // let options = ["Fotosíntesis", "Metabolismo", "Respiración", "Homeostasis", "Digestión", "Transpiración", "Absorción", "Nutrición", "Excreción", "Circulación"]
        // let options = ["1967", "2001", "1994", "1988", "1981", "1976", "1945", "2005", "1954", "1963"]
        // let options = ["Guepardo", "León", "Tigre", "Oso", "Liebre", "Camello", "Pantera", "Lobo", "Venado", "Leopardo", "Ardilla", "Burro", "Toro"]
        // let options = ["Cerebelo", "Médula espinal", "Búlbo raquídeo", "Lóbulo temporal", "Lóbulo frontal", "Córtex somatomotor", "Lóbulo parietal", "Lóbulo occipital", "Córtex somatosensorial"]
        let options = ["Vivíparo", "Ovoviviparo", "Ovíparo", "Anfibio", "Verterbado", "Omnívoro", "Carnívoro", "Herbívoro", "Invertebrado", "Arácnidos"]

        // let options = ["Freddie Mercury", "John Lennon", "Elvis Presley", "Mick Jagger", "Paul McCartney", "Roger Taylor", "John Deacon", "Michael Jackson", "Ray Charles", "Bob Dylan", "Bob Marley", "Al Green", "Marvin Gaye", "Robert Plant", "Jim Morrison", "Kurt Cobain", "Thom Yorke", "Chris Cornell"]
        // let options = ["Piano", "Guitarra", "Tuba", "Ukelele", "Tambor", "Arpa", "Saxofón", "Batería", "Timpani", "Flauta dulce", "Tuba", "Trompa", "Trompeta", "Violín", "Maracas", "Bongos", "Gaita", "Banjo", "Xilófono", "Bandoneón", "Armónica"]
        // let options = ["Beyoncé", "Michael Jackson", "Rihanna", "Katy Perry", "Lady Gaga", "Dua Lipa", "Madonna", "Justin Bieber", "Harry Styles", "Ariana Grande", "Miley Cirus", "Bruno Mars", "Billie Eilish", "Doja Cat", "Taylor Swift", "Georg Solti", "Quincy Jones", "Alison Krauss"]
        // let options = ["4", "6", "1", "2", "3", "5", "7", "8", "9", "10"]
        // let options = ["Luis Miguel", "Juan Gabriel", "Alejandro Fernandez", "José José", "Joan Sebastian", "Pedro Infante", "Jorge Negrete", "Ricardo Arjona", "Javier Solís", "José Alfredo Jiménez", "Vicente Fernández", "Yuri"]
        // let options = ["Waka Waka (Esto es África)", "Live It Up", "Sign Of A Victory", "Wavin' Flag", "La La La", "We Are the Champions", "We Are One", "Grito Mundial", "Colors", "La copa de la vida"]
        // let options = ["Coldplay", "Imagine Dragons", "U2", "Maroon 5", "Green Day", "OneRepublic", "Twenty One Pilots", "Oasis", "The Verve", "Nirvana"]
        // let options = ["Heavy metal", "Reggae", "Blues", "Rock", "Jazz", "Country", "Salsa", "Reggaetón", "Góspel", "Disco", "Funk", "Soul", "Pop", "Clásica", "Rap"]
        // let options = ["Nueva Orleans", "Guadalajara","Kioto","Buenos Aires","Venecia","Colonia","Detroit","San Antonio","Marsella", "Atlanta"]
        // let options = ["George Harrison", "Jimi Hendrix", "Ringo Starr", "Paul McCartney", "Brian May", "Roger Taylor", "Kurt Cobain", "Eddie Van Halen", "Eric Clapton", "Ronnie Wood", "Keith Richards"]
        // let options = ["México", "Argentina", "Honduras", "Colombia", "Venezuela", "Cuba", "Chile", "Bolivia", "Perú", "Paraguay", "Guatemala", "Republica Dominicana", "Costa Rica"]
        // let options = ["Aretha Franklin", "Tina Turner", "Etta James", "Janis Joplin", "Nina Simone", "Joni Mitchell", "Patsy Cline", "Gladys Knight", "Bonnie Raitt", "Ronnie Spector"]
        // let options = ["Queen", "The Beatles", "The Rolling Stones", "Metalica", "Pink Floyd", "AC/DC", "Guns N' Roses", "Black Sabbath", "U2", "The Beach Boys", "ABBA", "Nirvana", "Radiohead", "KISS", "Oasis", "The Who"]

        // let options = ["Julio Verne", "Arthur Conan Doyle", "Antoine de Saint-Exupéry", "Jane Austen", "William Shakespeare", "Gabriel García Márquez", "Miguel de Cervantes", "Oscar Wilde", "Paulo Coelho", "Charles Dickens", "Franz Kafka", "James Joyce", "Mary Shelley", "Herman Melville", "Virginia Woolf", "Marcel Proust", "León Tolstói", "Victor Hugo", "Federico García Lorca", "Jorge Luis Borges", "Lope de Vega", "Julio Cortázar", "Patricia Highsmith", "Edgar Allan Poe", "Dange Alighieri", "J. R. R. Tolkien", "George Orwell", "Agatha Chistie", "Ken Follet", "Ernest Hemingway", "Víctor Hugo", "Pablo Neruda", "Hans Christian Andersen", "Giovanni Boccaccio", "Fiódor Dostoyevski", "William Faulkner", "Honoré de Balzac", "Samuel Beckett", "Albert Camus"]
        // let options = ["Gabriel García Márquez", "Miguel de Cervantes", "Oscar Wilde", "Paulo Coelho", "Octavio Paz", "Julio Cortázar", "Isabel Allende", "Mario Vargas Llosa", "Mario Benedetti", "Carlos Fuentes", "Gabriela Mistral", "Rubén Darío", "Jorge Luis Borges", "Pablo Neruda", "Juan Carlos Onetti", "José Martí", "Jorge Amado", "Miguel Asturias", "Roberto Bolaño"]
        // let options = ["Homero", "Hesíodo", "Sócrates", "Heródoto", "Platón", "Virgilio", "Menelao", "Sófocles", "William Shakespeare", "Dante Alighieri", "Ovidio"]
        // let options = ["El señor de los anillos", "Harry Potter", "Game of Thrones", "Las Crónicas de Narnia", "Crepúsculo", "Los juegos del hambre", "Diario de Greg", "El principito", "Outlander", "Alicia en el país de las maravillas", "1984"]
        // let options = ["Verona", "Florencia", "Pescara", "Nápoles", "Palermo", "Turín", "Génova", "Bari", "Milán", "Cagliari", "Venecia"]
        // let options = ["El amor en los tiempos del cólera", "Cien años de soledad", "Crónica de una muerte anunciada", "El coronel no tiene quien le escriba", "Memoria de mis putas tristes", "Un señor muy viejo con unas alas enormes", "Del amor y otros demonios", "Doce cuentos peregrinos", "La hojarasca", "El otoño del patriarca"]
        // let options = ["Frankenstein", "Hércules Poirot", "Sherlock Holmes", "Lisbeth Salander", "Jo March", "Harry Haller", "Martín Fierro", "Elizabeth Bennet", "Heathcliff", "Jean Valjean", "Melquíades", "Fitzwilliam Darcy", "Jonathan Harker", "Capitán Nemo", "Drácula", "Renfield", "Alucard"]
        // let options = ["Fábula", "Novela", "Epopeya", "Ensayo", "Tragedia", "Drama", "Soneto", "Oda", "Comedia", "Entremés", "Sainete", "Égloga", "Sátira"]
        // let options = ["Epílogo", "Índice", "Portada", "Prólogo", "Contraportada", "Página de créditos", "Lomo", "Introducción", "Cuerpo del libro", "Apéndices", "Prefacio"]
        // let options = ["1605", "1566", "1891", "1945", "1901", "1859", "1777", "1629", "1676", "1704", "1590"]
        // let options = ["El capital", "La riqueza de las naciones", "El Capital en el Siglo XXI", "Anti-Dühring", "Mi lucha", "Ciencia de la lógica", "La gaya ciencia", "El Anticristo", "Así habló Zaratustra", "El príncipe"]

        // let options = ["David Fincher", "Francis Ford Coppola", "James Cameron", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Stanley Kubrick", "Alfred Hitchcock", "Christopher Nolan", "Peter Jackson", "Woody Allen", "Akira Kurosawa", "David Lynch", "Tim Burton", "Sofia Coppola", "Agnès Varda", "Robert Zemeckis", "Dadid Yates", "Michael Bay", "Chris Columbus", "Gore Verbiinski", "Hayao Miyazaki", "Charles Chaplin", "Federico Fellini", "Akira Kurosawa", "Ingmar Bergman", "John Ford", "Billy Wilder", "Luis Buñuel", "Jean-Luc Godard", "Howard Hawks"]
        // let options = ["Robert Downey Jr.", "Keanu Reeves", "Hugh Jackman", "Jack Nicholson", "Harrison Ford", "Tom Hanks", "Daniel Craig", "Leonardo DiCaprio", "Robert De Niro", "Al Pacino", "Daniel Day-Lewis", "Anthony Hopkins", "Cary Grant", "Alain Delon", "Alberto Sordi", "Alec Guinness", "Alfredo Landa", "Bruno Ganz", "Burt Lancaster", "Buster Keaton", "Chang Chen", "Charles Laughton", "Denzel Washington", "Joaquin Phoenix", "Johnny Depp", "Christian Bale", "Brad Pitt", "Marlon Blando", "Jim Carrey", "Christopher Lee", "Clark Gable", "Dennis Hopper", "Dustin Hoffman", "Emil Jannings", "Marlon Brando", "Laurence Olivier", "James Stewart", "Cate Blanchett", "Katharine Hepburn", "Meryl Streep"]
        // let options = ["1997", "1966", "1981", "2003", "2000", "1991", "1993", "1998", "1987", "1985"]
        // let options = ["El renacido", "Titanic", "El lobo de Wall Street", "El origen", "Atrápame si puedes", "La isla siniestra", "Los asesinos de la luna de las flores", "El aviador", "Diamante de sangre", "La playa"]
        // let options = ["Nueva York", "Los Ángeles", "Austin", "Orlando", "Detroit", "Kansas", "San Francisco", "Charlotte", "Baltimore", "Chicago"]
        // let options = ["10", "1", "4", "16", "14", "12", "11", "8", "7", "6", "13"]
        // let options = ["Hannibal", "Uno de los nuestros", "El padrino II", "Érase una vez en América", "Heat", "Taxi Driver", "Casino", "Toro Salvaje", "El cazador", "Los intocables de Eliot Ness"]
        // let options = ["Scar", "Simba", "Timón", "Mufasa", "Álex", "Marty", "Pumba", "Skipper", "Sid", "Manny", "Diego"]
        // let options = ["Elsa", "Midge", "Campanita", "Skipper", "Ariel", "Bibble", "Kuromi", "Princesa Peach", "Mujer Maravilla", "Blancanieves"]
        // let options = ["Pluto", "Minnie", "Winnie Pooh", "Bugs Bunny", "Pato Lucas", "Goofy", "Donald", "Miffy", "Stitch", "Snoopy"]
        // let options = ["Woody", "Jessie", "Forky", "Rex", "Lotso", "Patricio", "Slinky", "Mike Wazowski", "Roz", "Hamm"]

        // let options = ["Diego Velázquez", "Claude Monet", "Miguel Ángel", "Pablo Picasso", "Francisco de Goya", "Vincent van Gogh", "Salvador Dalí", "Edvard Munch", "Leonardo da Vinci", "Rembrandt", "Caravaggio", "Gustav Klimt", "Johannes Vermeer", "Rafael Sanzio", "Paul Cézanne", "Pierre-Auguste Renoir", "Vasili Kandinski", "Edgar Degas", "Paul Klee", "Eugène Delacroix", "Frida Kahlo", "Sandro Botticelli", "Henri Matisse", "Georgia O'Keeffe", "René Magritte", "Jackson Pollock", "Andy Warhol", "Jean-Michel Basquiat", "Remedios Varo"]
        // let options = ["La noche estrellada", "El beso", "La joven de la perla", "La Gioconda", "El nacimiento de Venus", "Las meninas", "Guernica", "La última cena", "La persistencia de la memoria", "La ronda de noche", "Impresión, sol naciente", "El jardín de las delicias", "Nighthawks", "La gran ola de Kanagawa", "La escuela de Atenas", "Las dos Fridas", "La muerte de Marat", "Las señoritas de Avignon", "La Libertad guiando al pueblo", "Olympia", "El columpio", "La lechera", "Lirios", "Los Girasoles"]
        // let options = ["Miguel Ángel", "Auguste Rodin", "Mirón de Eléuteras", "Anish Kapoor", "Edgar Degas", "Gian Lorenzo Bernini", "Henry Moore", "Constantin Brâncuși", "Alexander Calder", "Louise Bourgeois", "Plaxíteles", "Donatello", "Antonio Canova", "Alberto Giacometti", "Sol Lewitt", "Fernando Botero", "Jeff Koons"]
        // let options = ["El pensador", "El David", "Discóbolo", "Cristo Redentor", "El ejército de terracota", "Cloud gate", "Éxtasis de Santa Teresa", "La Piedad", "Estatua de la Libertad", "La pequeña bailarina de catorce años", "La Sirenita", "Loba capitolina", "Venus de Milo", "Mannenken pis", "El oso y el madroño", "Altar de Pérgamo", "Nefertiti", "El beso"]
        // let options = ["Renacimiento", "Impresionismo", "Barroco", "Realismo", "Cubismo", "Surrealismo", "Pop Art", "Rococó", "Romanticismo", "Postimpresionismo", "Expresionismo", "Neoclasicismo", "Dadaísmo", "Fauvismo"]
        // let options = ["8.80", "15.40", "13.60", "12.15", "6.60", "7.50", "11.20", "18.10", "16.90", "10.90"]
        // let options = ["Bodegón", "Autorretrato", "Retrato", "Vanitas", "Paisaje", "Arte abstracto", "Arte figurativo", "Arte conceptual", "Arte digital", "Arte callejero", "Arte cinético", "Arte minimalista"]
        // let options = ["1931", "1886", "1952", "1947", "1941", "1937", "1928", "1922", "1914", "1902"]
        // let options = ["Puntillismo", "Neoimpresionismo", "Impresionismo", "Divisionismo", "Surrealismo", "Cloisonismo", "Modernismo", "Fovismo", "Cubismo", "Diviosionismo", "Futurismo"]
        // let options = ["Sídney", "Nueva York", "París", "Bangkok", "Tokio", "Shanghái", "Buenos Aires", "San Francisco", "Toronto", "Hamburgo", "Roma", "Atenas"]

        // let options = ["2", "4", "5", "6", "8", "9", "1", "Ninguno", "11", "12"]
        // let options = ["Andrómeda", "Molinete", "Triángulo", "Gran Nube de Magallanes", "Pequeña Nube de Magallanes", "Remolino", "Sombrero", "Cigarro", "Triángulo del Fuego", "Triángulo del Bode"]
        // let options = ["Mercurio", "Potasio", "Aluminio", "Hidrógeno", "Litio", "Carbono", "Sodio", "Boro", "Nitrógeno", "Oxígeno", "Magnesio", "Silicio", "Fósforo", "Azufre", "Cloro", "Argón", "Calcio", "Titanio", "Vanadio", "Hierro", "Cobalto", "Níquel", "Cobre", "Zinc", "Arsénico", "Selenio", "Plata", "Oro"]
        // let options = ["Júpiter", "Mercurio", "Venus", "Tierra", "Marte", "Saturno", "Urano", "Neptuno", "Plutón", "Ceres"]
        // let options = ["Alfa Centauri", "Próxima Centauri", "Sirio", "Canopus", "Hadar", "Procyon", "Estrella de Barnard", "Arturo", "Vega", "Fomalhaut"]
        // let options = ["Werner Heisenberg", "Isaac Newton", "Albert Einstein", "Robert Oppenheimer", "Nikola Tesla", "Stephen Hawking", "Galileo Galilei", "Marie Curie", "Max Planck", "René Descartes", "Johannes Kepler", "Niels Bohr", "Charles Darwin", "Nicolás Copérnico", "Louis Pasteur", "Alexander Fleming", "Gregor Mendel", "Thomas Alva Edison", "Erwin Schrödinger", "Alfred Nobel", "Richard Feynman", "Benjamin Franklin", "Robert Boyle", "Godofredo Leibniz", "Robert Hooke", "Hans Christian Ørsted", "Alessandro Volta"]
        // let options = ["Dmitri Mendeléyev", "Antoine Lavoisier", "Marie Lavoisier", "Louis-Bernard Guyton de Morveau", "Joseph Priestley", "Louis Proust", "Andrés Manuel del Río", "Guillaume François Rouelle", "Claude Louis Berthollet", "Henry Cavendish", "Antoine-François de Fourcroy", "John Mayow", "Robert Boyle"]
        // let options = ["Supernova", "Nebulosa", "Orión", "Agujero negro", "Blázar", "Estrella binaria", "Protoestrella", "Púlsar", "Magnétar", "Cuásar", "Cúmulo globular"]
        // let options = ["Fuerza", "Capacidad", "Densidad", "Energía", "Longitud", "Masa", "Peso específico", "Potencia", "Superficie", "Temperatura", "Tiempo", "Velocidad", "Viscosidad", "Volumen", "Electricidad"]
        // let options = ["H₂O", "CO₂", "CH₄", "SO₂", "C₂H₆", "C₃H₈", "C₄H₁₀", "NO₂", "H₂SO₄", "SO₃"]
        // let options = ["Fusión", "Solidificación", "Sublimación", "Vaporización", "Condensación", "Cristalización", "Ionización", "Desionización", "Conservación", "Reproducción"]
        // let options = ["Fe", "Al", "H", "O", "S", "K", "Li", "Na", "Mg", "Be", "Sc", "Ti", "V", "Cr", "Mn", "Co", "Ni", "Cu", "Zn", "Si", "C", "F", "Se", "Ge", "As", "P", "Cl", "Ag", "Sn"]
        // let options = ["Oxígeno", "Hidrógeno", "Helio", "Litio", "Fósforo", "Metano", "Litio", "Carbono", "Nitrógeno", "Níquel", "Zinc", "Azufre", "Selenio", "Cobalto", "Boro", "Flúor"]
        // let options = ["Litio", "Metano", "Níquel", "Zinc", "Hierro", "Plata", "Oro", "Magnesio", "Aluminio", "Plomo", "Sodio", "Estaño", "Potasio", "Titanio", "Calcio", "Cobre", "Arsénico", "Boro", "Silicio"]

        // let options = ["Aguacate", "Tomate", "Piña", "Papaya", "Persea", "Brócoli", "Mango", "Pepino", "Berenjena", "Toronja", "Arándano", "Lechuga", "Cocotero", "Sandía", "Cebolla", "Granada", "Alcachofa", "Zanahoria", "Maní", "Mangostán", "Limón", "Fresa", "Maracuyá"]
        // let options = ["Española", "Bechamel", "Holandesa", "Velouté", "Tomate", "Mayonesa", "Barbacoa", "Yogur", "Vinagreta", "Boloñesa", "Pesto", "Ketchup", "Mojo"]
        // let options = ["Mozzarella", "Cheddar", "Parmesano", "Gouda", "Roquefort", "Brie", "Feta", "Edam", "Maasdam", "Camembert", "Comté", "Tulum", "Gruyére", "Emmental", "Appenzeller", "Stilton", "Quesillo", "Mascarpone", "Gorgonzola", "Provolone"]
        // let options = ["Ceviche", "Aguachile", "Lomo saltado", "Empanada", "Carpaccio", "Sashimi", "Tamal", "Paella", "Pozole", "Patacón", "Poke", "Arepa", "Sope", "Encebollado", "Tiradito", "Humita"]
        // let options = ["Arroz sazonado con vinagre", "Pescado crudos cortados", "Puerro, cebolla y zanahoria", "Trozos de carne y verduras crudas", "Sopa de fideos con trozos de carne", "Harina de trigo, levadura, agua y sal", "Mariscos y verduras", "Tortilla, carne, limón y salsa", "Carne picada enrollados en una masa", "Harina de trigo y agua"]
        // let options = ["Feijoada", "Acarajé", "Picanha", "Moqueca de Pescado", "Taco", "Enchiladas", "Guacamole", "Chilaquiles", "Tamales", "Asado", "Locro", "Empanada", "Provoleta", "Arepas", "Arroz con pollo", "Dorada a la plancha", "Ceviche", "Lomo Saltado", "Anticuchos", "Cuy Chactado", "Bollo pelón", "Cachito", "Cazuela", "Curanto", "Caldillo de Congrio"]
        // let options = ["Pasas", "Almendra", "Avellana", "Cacahuete", "Castaña", "Dátil", "Nuez", "Piñón", "Pipas de girasol", "Pistacho", "Sésamo"]
        // let options = ["Bastones", "Aguayón", "Lengua", "Lomo", "Asado", "Filete", "Matambre", "Vacío", "Cuadril", "Paleta", "Garrón", "Nalga", "Azotillo", "Entraña"]
        // let options = ["Consomé", "Fumet", "Mirepoix", "Bisque", "Bullabesa", "Birria", "Quesabirria", "Puré", "Minestrone", "Potaje", "Confit"]
        // let options = ["Perú", "Argentina", "Venezuela", "Colombia", "México", "España", "Turquía", "Japón", "China", "India", "Noruega", "Indonesia", "Vietnam", "Rumania"]
        // let options = ["Onigiri", "Sushi", "Nigiri", "Gimbap", "Sashimi", "Takoyaki", "Ramen", "Mochi", "Poke", "Yakiniku", "Pho", "Unagi", "Takoyaki"]
        // let options = ["Tiramisú", "Malvavisco", "Merengue", "Macaron", "Suflé", "Crema catalana", "Cheesecake", "Baklavas", "Alfajor", "Tarta Sacher", "S'more", "Pretzel", "Mochi", "Waffles", "Brownie", "Gragea", "Algodón de azucar", "Mantequilla", "Pastel de queso", "Tartufo", "Mousse", "Cantuccini", "Cannolo", "Milhojas", "Risotto"]
        // let options = ["Sidra", "Vino", "Cerveza", "Café", "Cola", "Whisky", "Tequila", "Vodka", "Mate", "Té", "Leche", "Jugo", "Limonada", "Licor", "Batido", "Yogur", "Ron", "Ginebra", "Margarita"]
        // let options = ["Tequila", "Vino", "Sidra", "Cerveza", "Whisky", "Vodka", "Ginebra", "Margarita", "Mezcal", "Ron", "Raki", "Licor", "Mojito"]

        // let options = ["Thomas Alva Edison", "Antonio Meucci", "Johannes Gutenberg", "Nicolás Copérnico", "William Tyndale", "Johannes Kepler", "Galileo Galilei", "Nikola Tesla", "Leonardo da Vinci", "Stephen Hawking", "Alexander Graham Bell", "Michael Faraday", "Reginald Fessenden", "Heinrich Rudolf Hertz", "Alan Turing", "Kurt Gödel", "John von Neumann", "Ludwig Wittgenstein", "Herman Hollerith", "Tommy Flowers", "James Clerk Maxwell", "Alfred Nobel", "Hans Christian Ørsted"]
        // let options = ["Avión", "Máquina de vapor", "Teléfono", "Máquina de Turing", "Imprenta", "Bombilla eléctrica", "Telégrafo", "Automóvil", "Cine", "Fotografía", "Internet", "Ordenador", "Biotecnología", "Desmotadora", "Impresora 3D", "Ferrocarril", "Telar mecánico"]
        // let options = ["Electrólisis", "Dilución", "Combustión", "Diamagnetismo", "Grabación", "Fotosíntesis", "Magnetismo", "Metástasis", "Psicosis", "Osmosis"]

        // let options = ["Friedrich Nietzsche", "René Descartes", "Sigmund Freud", "Carl Gustav Jung", "Jacques Lacan", "Alfred Adler", "Arthur Schopenhauer", "Adam Smith", "Wilhelm Wundt", "Immanuel Kant", "Jean Piaget", "Josef Breuer", "John Locke", "Tomás de Aquino", "David Hume", "Georg Wilhelm Friedrich Hegel", "Martin Heidegger", "Friedrich Engels", "Karl Marx", "Nicolás Maquiavelo", "Francis Bacon"]
        // let options = ["Macedonia del Norte", "Grecia", "Pakistán", "España", "México", "Cuba", "Nueva Zelanda", "Túnez", "Siria", "Sudáfrica"]
        // let options = ["6", "1", "2", "3", "4", "5", "8", "7", "9", "10"]
        // let options = ["León", "Cebra", "Tigre", "Mono", "Liebre", "Pantera", "Chita", "Hiena", "Rinoceronte", "Loro", "Serpiente"]

        const questionUpdated = await Question.findByIdAndUpdate(id, {
            $set: {
                options
            }
        }, {
            new: true
        })

        return res.status(200).json({
            message: "Option added successfully",
            question: questionUpdated
        })

    } catch (error) {
        throw error
    }

}

export const removeQuestion = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const question = await Question.findByIdAndDelete(id)

        if (!question) {
            return res.status(400).json({ message: "Question does not exists" })
        }

        return res.status(200).json({ message: "Question removed successfully" })

    } catch (error) {
        throw error
    }

}

export const updateQuestion = async (req: Request, res: Response): Promise<Response> => {

    const { question, answer, isAllOptions } = req.body
    const { id } = req.params

    try {

        const questionFound = await Question.findById(id)

        if (!questionFound) {
            return res.status(400).json({ message: "Question does not exists" })
        }

        const questionUpdated = await Question.findByIdAndUpdate(id, {
            isAllOptions: isAllOptions ? isAllOptions : questionFound.isAllOptions,
            answer: answer ? answer : questionFound.answer,
            question: question ? question : questionFound.question,
        }, {
            new: true
        })

        return res.status(200).json({
            message: "Question updated successfully",
            question: questionUpdated
        })

    } catch (error) {
        throw error
    }

}