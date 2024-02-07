import { View, Text, Pressable } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

const PreFinish = ({ preFinish }: { preFinish: () => void }) => {
    return (
        <Pressable style={playingStyles.containerPreFinish} onPress={preFinish}>
            <View style={playingStyles.containPreFinish}>
                <Text style={playingStyles.textPreFinish}>¡Juego Terminado!</Text>
                <Text style={playingStyles.textPreFinish}>Toca para continuar</Text>
            </View>
        </Pressable>
    )
}

export default PreFinish