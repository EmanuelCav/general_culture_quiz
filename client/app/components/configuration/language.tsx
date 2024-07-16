import { Pressable, Text } from "react-native"

import { configurationStyles } from "../../styles/configuration.styles"

import { LanguagePropsType } from "../../types/props.types"

const Language = ({ user, languageSelect }: LanguagePropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            configurationStyles.buttonConfig
        ]} onPress={languageSelect}>
            <Text style={configurationStyles.textConfig}>
                {user.language === 'English' ? 'Language' : user.language === 'Español' ? 'Idioma' : 'Idioma'}
            </Text>
            <Text style={configurationStyles.textConfig}>{user.language}</Text>
        </Pressable>
    )
}

export default Language