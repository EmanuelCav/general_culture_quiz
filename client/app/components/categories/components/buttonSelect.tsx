import { Text, Pressable } from 'react-native'

import { playStyles } from '../../../styles/play.styles'

const ButtonSelect = ({ text }: { text: string }) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#ffa420' : '#FF8C00',
      },
      playStyles.buttonSelect
    ]} onPress={() => console.log("fdsf")}>
      <Text style={playStyles.textButtonSelect}>{text}</Text>
    </Pressable>
  )
}

export default ButtonSelect