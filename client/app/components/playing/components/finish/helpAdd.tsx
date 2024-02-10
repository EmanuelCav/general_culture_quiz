import { Dimensions, Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { playingStyles } from '../../../../styles/playing.styles'

import { HelpType } from '../../../../types/key.type'

const HelpAdd = ({ changeHelp }: { changeHelp: (type: HelpType) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            playingStyles.containerHelpsAdd
        ]} onPress={() => changeHelp('add')}>
            <View style={playingStyles.containHelpText}>
                <Text style={playingStyles.textStatisticGame}>x2</Text>
                <Icon name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} />
            </View>
            <Icon name='video' color={'#ffffff'} size={Dimensions.get("window").height / 37} />
        </Pressable>
    )
}

export default HelpAdd