import { Pressable, Text, View } from 'react-native'
import { homeStyles } from '../../../../styles/home.styles'

const Sounds = () => {
    return (
        <View style={homeStyles.containerUserSettings}>
            <Pressable>
                <Text>Sonidos</Text>
            </Pressable>
        </View>
    )
}

export default Sounds