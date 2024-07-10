import { Text, View } from "react-native"

import { homeStyles } from "../../../styles/home.styles"

const TextTitle = () => {
    return (
        <View style={homeStyles.containerEventTitle}>
            <Text style={homeStyles.textTitle}>Anotador de Puntos</Text>
        </View>
    )
}

export default TextTitle