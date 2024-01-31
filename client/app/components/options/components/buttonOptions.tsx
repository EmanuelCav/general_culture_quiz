import { Pressable, Text } from 'react-native'

import { ButtonOptionPropsType } from '../../../types/props.types'

import { generalStyles } from '../../../styles/general.styles'

const ButtonOptions = ({ text, func, amountOptions }: ButtonOptionPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#ffa420' : `${amountOptions === Number(text) ? "#FF8C00" : "#FFFFFF"}`,
      },
      amountOptions === Number(text) ? generalStyles.buttonMenu : generalStyles.buttonNotSelected
    ]} onPress={(e) => func(e, Number(text))} >
      <Text style={ amountOptions === Number(text) ? generalStyles.buttonMenuText : generalStyles.textButtonNotSelected}>{text}</Text>
    </Pressable>
  )
}

export default ButtonOptions