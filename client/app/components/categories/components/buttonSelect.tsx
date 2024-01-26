import { Text, Pressable } from 'react-native'

import { playStyles } from '../../../styles/play.styles'

const ButtonSelect = ({ text }: { text: string }) => {
  return (
    <Pressable style={playStyles.buttonSelect}>
        <Text style={playStyles.textButtonSelect}>{text}</Text>
    </Pressable>
  )
}

export default ButtonSelect