import { View, Text, Pressable } from 'react-native';

import { homeStyles } from '../../../styles/home.styles';

import { LabelPropsType } from '../../../types/props.types';

const Label = ({ text, func, label }: LabelPropsType) => {
    return (
        <View style={homeStyles.containerLabel}>
            <Text style={homeStyles.titleLabel}>{label}</Text>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : '#ffffff'
                }, homeStyles.label]} onPress={func}>
                <Text style={homeStyles.textLabel}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default Label