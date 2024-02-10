import { View, Dimensions, Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { HelpPropsType } from '../../../../types/props.types'

import { playStyles } from '../../../../styles/play.styles'

const Help = ({ helps, isAnswered, changeHelp }: HelpPropsType) => {
  return (
    <View style={{ width: '16%' }}>
      <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#ffa420' : `${isAnswered ? '#828282' : '#ffffff'}`
        },
        playStyles.buttonHelp
      ]}
        disabled={isAnswered} onPress={() => changeHelp('help')}>
        <Text style={playStyles.helpText}>{helps}</Text>
        <Icon name='help' color={'#FF8C00'} size={Dimensions.get("window").height / 39} />
      </Pressable>
    </View>
  )
}

export default Help