import { Pressable, Text } from 'react-native'

import { ButtonMenuPropsType } from '../../types/props.types'

import { generalStyles } from '../../styles/general.styles'

const ButtonMenu = ({ func, text, isConnection }: ButtonMenuPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#ffa420' : `${isConnection ? '#FF8C00' : '#828282'}`,
        opacity: isConnection ? 1 : .5
      },
      generalStyles.buttonMenu
    ]} onPress={func} disabled={!isConnection}>
      <Text style={generalStyles.buttonMenuText}>{text}</Text>
    </Pressable>
  )
}

export default ButtonMenu