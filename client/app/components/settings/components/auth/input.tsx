import { View, Text, TextInput } from 'react-native'

import { InputPropsType } from '../../../../types/props.types'

import { homeStyles } from '../../../../styles/home.styles'

const Input = ({ value, label, onChange, maxLength }: InputPropsType) => {
  return (
    <View style={homeStyles.containerInput}>
        <Text style={homeStyles.labelInput}>{label}</Text>
        <TextInput style={homeStyles.inputAuth} value={value} onChangeText={onChange} autoComplete='off' maxLength={maxLength} />
    </View>
  )
}

export default Input