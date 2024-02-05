import { View, Text, TextInput } from 'react-native'

import { InputPropsType } from '../../../../types/props.types'

import { homeStyles } from '../../../../styles/home.styles'

const Input = ({ value, label, onChange }: InputPropsType) => {
  return (
    <View style={homeStyles.containerInput}>
        <Text style={homeStyles.labelInput}>{label}</Text>
        <TextInput style={homeStyles.inputAuth} value={value} onChangeText={() => onChange(value)} autoComplete='off' />
    </View>
  )
}

export default Input