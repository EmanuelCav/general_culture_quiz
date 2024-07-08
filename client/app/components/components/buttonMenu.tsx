import { Pressable, Text } from 'react-native'

import { ButtonMenuPropsType } from '../../types/props.types'

import { generalStyles } from '../../styles/general.styles'

const ButtonMenu = ({ func, text }: ButtonMenuPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#ffa420' : '#FF8C00'
      },
      generalStyles.buttonMenu
    ]} onPress={func}>
      <Text style={generalStyles.buttonMenuText}>{text}</Text>
    </Pressable>
  )
}

export default ButtonMenu