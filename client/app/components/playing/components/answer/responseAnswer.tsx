import { View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { playingStyles } from '../../../../styles/playing.styles'

const ResponseAnswer = ({ answer }: { answer: boolean }) => {
    return (
        <View style={playingStyles.containerResponseAnswer}>
            <Icon name={answer ? 'checkcircle' : 'closecircle'} color={answer ? '#00ff00' : '#ff0000'} size={Dimensions.get("window").height / 46} />
            <Text style={[playingStyles.textAnswer, {
                color: answer ? '#00ff00' : '#ff0000',
                marginLeft: Dimensions.get("window").width / 60
            }]}>{answer ? 'Correcto' : 'Incorrecto'}</Text>
        </View>
    )
}

export default ResponseAnswer