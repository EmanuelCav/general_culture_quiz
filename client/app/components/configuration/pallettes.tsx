import { View } from "react-native"

import Pallette from "./components/pallette"

import { configurationStyles } from "../../styles/configuration.styles"

import { PallettesPropsType } from "../../types/props.types"

const Pallettes = ({ user, backgroundSelect, colorSelect }: PallettesPropsType) => {
    return (
        <View style={configurationStyles.containerSectionConfig}>
            <Pallette color={user.palletteBackground!} func={backgroundSelect} 
            text={user.language === 'English' ? 'Scoreboard background' : user.language === 'Español' ? 'Fondo del marcador' : 'Fundo do placar'} />
            <Pallette color={user.palletteText!} func={colorSelect} 
            text={user.language === 'English' ? 'Scoreboard text' : user.language === 'Español' ? 'Texto del marcador' : 'Texto do placar'} />
        </View>
    )
}

export default Pallettes