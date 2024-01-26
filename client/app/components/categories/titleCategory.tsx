import { View, Text } from 'react-native'

import { playStyles } from '../../styles/play.styles'

const TitleCategory = () => {
  return (
    <View style={playStyles.containCategory}>
        <Text style={playStyles.textTitleCategory}>Selecciona las categorías para las preguntas</Text>
    </View>
  )
}

export default TitleCategory