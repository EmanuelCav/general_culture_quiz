import { Text, Pressable } from 'react-native'

import { playStyles } from '../../../styles/play.styles'

import { ButtonSelectPropsType } from '../../../types/props.types'

const ButtonSelect = ({ text, func, query }: ButtonSelectPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#ffa420' : '#FF8C00',
      },
      playStyles.buttonSelect
    ]} onPress={() => func(query)}>
      <Text style={playStyles.textButtonSelect}>{text}</Text>
    </Pressable>
  )
}

export default ButtonSelect