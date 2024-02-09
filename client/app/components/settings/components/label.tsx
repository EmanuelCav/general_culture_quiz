import { View, Text, Pressable } from 'react-native';

import { homeStyles } from '../../../styles/home.styles';

const Label = ({ text }: { text: string }) => {
    return (
        <View style={homeStyles.containerLabel}>
            <Text style={homeStyles.titleLabel}>{text}</Text>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : '#ffffff'
                }, homeStyles.label]}>
                <Text style={homeStyles.textLabel}>Pais</Text>
            </Pressable>
        </View>
    )
}

export default Label