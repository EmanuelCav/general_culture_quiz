import { Pressable, Text, View } from "react-native"

import { PallettePropsType } from "../../../types/props.types"

import { configurationStyles } from "../../../styles/configuration.styles"

const Pallette = ({ text, color, func }: PallettePropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            configurationStyles.buttonConfig
          ]} onPress={func}>
            <Text style={configurationStyles.textConfig}>{text}</Text>
            <View style={[{ backgroundColor: color }, configurationStyles.pallete]} />
        </Pressable>
    )
}

export default Pallette