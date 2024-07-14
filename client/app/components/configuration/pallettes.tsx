import { View } from "react-native"

import Pallette from "./components/pallette"

import { configurationStyles } from "../../styles/configuration.styles"

import { PallettesPropsType } from "../../types/props.types"

const Pallettes = ({ user, backgroundSelect, colorSelect }: PallettesPropsType) => {
    return (
        <View style={configurationStyles.containerSectionConfig}>
            <Pallette color={user.palletteBackground!} text="Marker Background" func={backgroundSelect} />
            <Pallette color={user.palletteText!} text="Marker Text" func={colorSelect} />
        </View>
    )
}

export default Pallettes