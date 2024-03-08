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

        if(user.isImage) {
            shuffleQuestions = shuffle(questions)
        } else {
            shuffleQuestions = shuffle(questions).filter((sq: IQuestion) => sq.image !== undefined)
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

        if(!question) {
            return res.status(400).json({ message: "Question does not exists" })
        }

        // const options = ["Italia", "Francia", "España", "Portugal", "Suiza", "Austria", "Croacia", "Grecia", "Suecia", "Bélgica"]
        // let options = ["50", "44", "38", "56", "62", "68", "74", "80", "32", "26"]
        // const options = ["Monte Everest", "K2", "Kanchenjunga", "Kilimanjaro", "Pico Dufour", "Lhotse I", "Aconcagua", "Mont Blanc", "Teide", "Manaslu"]
        // let options = ["Chichén Itzá", "Taj Mahal", "Coliseo Romano", "Alhambra", "Acrópolis de Atenas", "Burj Khalifa", "Basílica de San Pedro", "Torre Eiffel", "Machu Picchu", "Fushimi Inari", "Kremlin", "Muralla China", "El Partenón", "Newgrange", "Tesoro de Atreo", "Stonehenge"]
        // let options = ["Río Sena", "Río Danubio", "Río Loira", "Río Rin", "Río Ural", "Río Tajo", "Río Duero", "Río Dniéster", "Río Ródano", "Río Kama", "Río Támesis", "Río Vístula", "Río Dniéper", "Río Ebro"]
        // let options = ["Teherán", "Doha", "Bagdad", "Damasco", "Amman", "Isfahán", "Mashhad", "Beirut", "Yazd", "Taskent", "Mosul", "Alepo", "Islamabad", "Rasht", "Qazvín"]
        // let options = ["Nigeria", "Sudáfrica", "Camerún", "Chad", "Burkina Faso", "Malí", "Ghana", "Egipto", "Marruecos", "Argelia", "Túnez", "Tanzania", "Etiopía", "Guinea", "Sudán"]
        // let options = ["Perú", "México", "Egipto", "Indonesia", "Reino Unido", "Rusia", "Brasil", "Guatemala", "Sudáfrica", "Irak", "Siria", "Jordania", "Turquía", "Etiopía", "Chile"]
        // let options = ["Monte Elbrús", "Mont Blanc", "Teide", "Comapedrosa", "Zugspitze", "Mulhacén", "Pico Dufour", "Grossglockner", "Ben Nevis", "Monte Korab"]
        // let options = ["Mar Caspio", "Lago Superior", "Lago Victoria", "Lago Hurón", "Lago Míchigan", "Lago Tanganica", "Lago Malawi", "Lago Ontario", "Lago Ládoga", "Mar de Aral", "Lago Maracaibo", "Laguna de los Patos"]
        // let options = ["Río Amazonas", "Río Nilo", "Río Paraná", "Río Yangtsé", "Río Misisipi", "Río Amarillo", "Río Iguazú", "Río Tietê", "Río Paranaíba", "Río Mekong", "Río Kasai", "Río Níger", "Río Obi", "Río Congo", "Río Amur"]

        // let options = ["1930", "1934", "1938", "1950", "1942", "1928", "1936", "1940", "1948", "1954"]
        // let options = ["Uruguay", "Alemania", "Brasil", "Argentina", "Colombia", "Paises Bajos", "Italia", "Francia", "Estados Unidos", "México", "Inglaterra", "España", "Portugal", "Rusia"]
        // let options = ["Real Madrid", "Barcelona", "Milan", "Ajax", "Liverpool", "Manchester City", "Manchester United", "Arsenal", "Inter", "Bayern Munich", "Atletico Madrid", "Chelsea", "Porto", "Sevilla"]
        // let options = ["Nápoli", "Milan", "Inter", "Fiorentina", "Juventus", "Torino", "Bologna", "Lazio", "Roma", "Atalanta", "Udinese", "Bari", "Pisa", "Genoa", "Catania"]
        // let options = ["15", "11", "8", "10", "17", "13", "14", "12", "20", "16"]
        // let options = ["Rafael Nadal", "Jimmy Connors", "Novak Djokovic", "Roger Federer", "Andy Murray", "Pete Sampras", "Roy Emerson", "Rod Laver", "Björn Borg", "Bill Tilden", "John McEnroe", "Andre Agassi", "Ivan Lendl"]
        // let options = ["Críquet", "Natación", "Atletismo", "Golf", "Fútbol", "Motociclismo", "Automovilismo", "Ciclismo", "Tenis", "Básquet", "Equitación", "Pentatlón", "Remo", "Vela", "Voleibol", "Balonmano", "Hockey", "Rugby", "Judo", "Esgrima", "Tiro con arco", "Tenis de mesa"]
        // let options = ["All Blacks", "Wallabies", "Pumas", "Springboks", "Rosas", "Bleus", "Azurri", "Lelos", "Trébol", "Robles"]
        // let options = ["Sudáfrica", "Nueva Zelanda", "Australia", "Argentina", "Irlanda", "Inglaterra", "Gales", "Escocia", "Italia", "Francia", "Fiyi"]
        // let options = ["Estados Unidos", "Rusia", "Suecia", "Australia", "España", "Francia", "Argentina", "Brasil", "Alemania", "Chequia", "Italia", "Canadá"]
        // let options = ["4", "1", "2", "3", "5", "6", "7", "8", "9", "10"]
        // let options = ["Negro", "Blanco", "Azul", "Rojo", "Amarillo", "Violeta", "Verde", "Naranja", "Gris", "Rosa", "Marrón"]
        // let options = ["Césped", "Arcilla", "Dura", "Moqueta", "Madera", "Barro", "Arena", "Metal", "Plástico", "Acero"]
        // let options = ["Love", "Match Point", "Servicio", "Deuce", "Net", "Ace", "Revés", "Smash", "Drop", "Let"]
        // let options = ["LeBron James", "Karl Malone", "Kareem Abdul-Jabbar", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal", "Wilt Chamberlain", "Dirk Nowitzki", "Kevin Durant", "Tim Duncan", "Oscar Robertson", "Moses Malone"]
        // let options = ["Los Angeles Lakers", "Boston Celtics", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs", "Detroit Pistons", "Miami Heat", "Philadelphia 76ers", "Houston Rockets", "New York Knicks", "Milwaukee Bucks", "Toronto Raptors", "Dallas Mavericks"]

        // let options = ["1939", "1945", "1916", "1922", "1928", "1930", "1952", "1958", "1963", "1943"]
        // let options = ["George Washington", "John Adams", "John F. Kennedy", "Harry S. Truman", "Abraham Lincoln", "Thomas Jefferson", "James Madison", "Franklin D. Roosevelt", "Bill Clinton", "Andrew Jackson", "James K. Polk", "Martin Van Buren", "Grover Cleveland"]
        // let options = ["Gengis Kan", "Mao Zedong", "Iósif Stalin", "Alejandro Magno", "Carlomagno", "Julio César", "Augusto", "Ciro II", "Dario I", "Nabucodonosor II", "Ptolomeo I", "Aristóteles", "Pompeyo", "Cicerón", "Atila", "Hefestión"]
        // let options = ["Augusto", "Nerón", "Calígula", "Tiberio", "Vespasiano", "Domiciano", "Trajano", "Antonino Pío", "Cómodo", "Tito", "Marco Aurelio", "Tácito", "Constantino I", "Adriano", "Claudio"]
        // let options = ["Francisco Pizarro", "Hernán Cortés", "Fernando de Magallanes", "Vasco da Gama", "Américo Vespucio", "Jacques Cartier", "Marco Polo", "James Cook", "Bartolomeu Dias", "Enrique el Navegante", "Francis Drake", "Cristóbal Colón"]
        // let options = ["Batalla de Waterloo", "Batalla de Verdún", "Batalla de Moscú", "Batalla del Somme", "Batalla de Stalingrado", "Batalla de Berlín", "Batalla de Mukden", "Batalla de Jena", "Batalla de Leipzig", "Batalla de Friedland"]
        // let options = ["Caída del muro de Berlín", "Asesinato de Francisco Fernando", "Caída del Imperio Otomano", "Disolución de Yugoslavia", "Revolución rusa", "Bombardeos en Hiroshima", "Batalla de Stalingrado", "Día D", "Asesinato de Trotski", "Asesinato de Abraham Lincoln", "Batalla de Waterloo"]
        // let options = ["Tratado de Versalles", "Tratado de Kars", "Tratado de Traventhal", "Tratado de Ulm", "Tratado de Hubertusburgo", "Paz de Augsburgo", "Tratado de Ancón", "Acuerdo de Brioni", "Acuerdo de Kumanovo", "Tratado de Heiligen", "Paz de Dresde"]
        // let options = ["Nicolás II", "Pablo I", "Iván VI", "Pedro II", "Alejandro III", "Paul von Hindenburg", "Otto von Bismarck", "Vladimir Lenin", "Iósif Stalin", "Benito Mussolini", "Lev Trotski", "Winston Churchill", "Leonid Brézhnev", "Karl Marx"]
        // let options = ["Constantinopla", "Alejandría", "Bagdad", "Lúxor", "Guiza", "Atenas", "Roma", "Sofía", "Skopie", "Corinto", "Troya", "Argos"]
        // let options = ["Imperio bizantino", "Imperio otomano", "Imperio británico", "Imperio ruso", "Imperio mongol", "Imperio español", "Imperio austrohúngaro", "Imperio persa", "Califato ortodoxo", "Califato omeya"]

        // let options = ["Pingüino", "Murciélago", "Buitre", "Gaviota", "Cacatúa", "Golondrina", "Urraca", "Lechuza", "Flamenco", "Colibrí"]
        // let options = ["Abeja", "Avispa", "Cigarra", "Luciérnaga", "Crisopa", "Tábano bovino", "Carcoma", "Tijereta", "Chinche de la malva", "Libélula vulgar"]
        // let options = ["Ballena azul", "Tiburón blanco", "Calamar gigante", "Jirafa", "Elefante", "Anaconda", "Rorcual común", "Cachalote", "Orca", "Oso polar"]
        // let options = ["Camaleón", "Cobra", "Lagarto tizón", "Lución", "Pitón", "Dragón de Komodo", "Lagartija", "Iguana", "Yacaré", "Tuátara"]
        // let options = ["Estribo", "Fémur", "Tibia", "Fíbula", "Costillas", "Ulna", "Húmero", "Escápula", "Clavícula", "Radio", "Pubis", "Esternón"]
        // let options = ["3", "1", "5", "7", "9", "11", "13", "15", "17", "19"]
        // let options = ["Páncreas", "Hígado", "Piel", "Riñón", "Corazón", "Pulmones", "Estómago", "Bazo", "Útero", "Cerebro", "Próstata", "Ovarios", "Timo"]
        // let options = ["Mitocondria", "Núcleo", "Lisosomas", "Microtubulo", "Centríolos", "Aparato de Golgi", "Ribosomas", "Retículo endoplasmático rugoso", "Retículo endoplasmático liso", "Nucléolo"]
        // let options = ["Sartorio", "Deltoide", "Bicep", "Tricep", "Diafragma", "Risorio", "Gluteo", "Trapecio", "Cuadricep", "Isquiotibial"]
        // let options = ["Tendón", "Epitelio", "Miocito", "Citoplasma", "Neurona", "Lisosomas", "Centríolos", "Ribosomas", "Microtubulo", "Mitocondria"]
        // let options = ["Plaqueta", "Neurona", "Neutrófilo", "Glóbulo rojo", "Óvulo", "Melanocitos", "Megacariocito", "Adipocito", "Célula muscular lisa", "Espermatozoide"]
        // let options = ["Alexander Fleming", "Charles Darwin", "Jean-Baptiste Lamarck", "Alfred Russel Wallace", "Sigmund Freud", "Isaac Newton", "Gregor Mendel", "Louis Pasteur", "Marie Curie", "Anton van Leeuwenhoek", "Ernst Mayr", "Antoine Lavoisier", "Francesco Redi", "Robert Koch", "Robert Brown"]
        // let options = ["Fotosíntesis", "Metabolismo", "Respiración", "Homeostasis", "Digestión", "Transpiración", "Absorción", "Nutrición", "Excreción", "Circulación"]

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
        let options = ["1605", "1566", "1891", "1945", "1901", "1859", "1777", "1629", "1676", "1704", "1590"]

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