import { View, Text, TouchableOpacity, Pressable } from "react-native"

import { ListConfigPropsType } from "../../types/props.types"

import { configurationStyles } from "../../styles/configuration.styles"

const ListConfig = ({ list, isColor, func }: ListConfigPropsType) => {
    return (
        <View style={configurationStyles.backgroundListConfig}>
            <View style={configurationStyles.containerListConfig}>
                <Text style={configurationStyles.textConfiguration}>{isColor ? "Select a color" : "Select a language"}</Text>
                {
                    list.map((option, index) => (
                        <View key={index}>
                            {
                                isColor ? (
                                    <TouchableOpacity onPress={() => func(option)}>
                                        <View style={[{ backgroundColor: option }, configurationStyles.colorSelected]} />
                                    </TouchableOpacity>
                                ) : (
                                    <Pressable style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? '#ffa420' : '#FF8C00'
                                        },
                                        configurationStyles.buttonAccept
                                    ]} onPress={() => func(option)}>
                                        <Text style={configurationStyles.textLanguage}>{option}</Text>
                                    </Pressable>
                                )
                            }
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default ListConfig