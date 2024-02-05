import { Text, Pressable } from 'react-native'

import { ButtonAuthPropsType } from '../../../../types/props.types'

import { homeStyles } from '../../../../styles/home.styles'

const ButtonAuth = ({ text, func }: ButtonAuthPropsType) => {
  return (
    <Pressable style={({ pressed }) => [{
      backgroundColor: pressed ? '#ffa420' : '#FF8C00',
    }, homeStyles.buttonAuth]} onPress={func}>
      <Text style={homeStyles.textButtonAuth}>{text}</Text>
    </Pressable>
  )
}

export default ButtonAuth