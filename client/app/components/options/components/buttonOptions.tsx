import { Pressable, Text } from 'react-native'

import { ButtonOptionPropsType } from '../../../types/props.types'

import { generalStyles } from '../../../styles/general.styles'

const ButtonOptions = ({ text, func }: ButtonOptionPropsType) => {
  return (
    <Pressable style={[generalStyles.buttonMenu]} >
        <Text>{text}</Text>
    </Pressable>
  )
}

export default ButtonOptions