import { Text, TextInput, View } from "react-native"

import { annotatorStyles } from "../../../../styles/annotator.styles"

import { InputPropsType } from "../../../../types/props.types"

const Input = ({ title, handleChange, placeholder, maxLength, value }: InputPropsType) => {
    return (
        <View style={annotatorStyles.containerInput}>
            <Text style={annotatorStyles.labelSettings}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={handleChange}
                maxLength={maxLength}
                autoComplete="off"
                value={value}
                style={annotatorStyles.inputSettings}
            />
        </View>
    )
}

export default Input