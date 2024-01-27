import { Pressable, Text } from 'react-native'

import { ButtonOptionPropsType } from '../../../types/props.types'

import { generalStyles } from '../../../styles/general.styles'

const ButtonOptions = ({ text, func }: ButtonOptionPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#ffa420' : '#FF8C00',
      },
      generalStyles.buttonMenu
    ]} onPress={(e) => func(e, Number(text))} >
      <Text style={generalStyles.buttonMenuText}>{text}</Text>
    </Pressable>
  )
}

export default ButtonOptions