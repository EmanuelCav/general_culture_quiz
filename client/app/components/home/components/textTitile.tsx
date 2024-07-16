import { Text, View } from "react-native"

import { homeStyles } from "../../../styles/home.styles"

import { LanguagesTypes } from "../../../types/key.type"

const TextTitle = ({ language }: { language: LanguagesTypes }) => {
    return (
        <View style={homeStyles.containerEventTitle}>
            <Text style={homeStyles.textTitle}>{language === 'English' ? 'Sports Scoreboard' : language === 'Español' ? 'Marcador de Deportes' : 'Placar de Esportes'}</Text>
        </View>
    )
}

export default TextTitle