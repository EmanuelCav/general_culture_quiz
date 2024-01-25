import { View, Text, Pressable } from 'react-native';

import { homeStyles } from '../../../styles/home.styles';

const Label = ({ text }: { text: string }) => {
    return (
        <View style={homeStyles.containerLabel}>
            <Text>{text}</Text>
            <Pressable>
                <Text>Pais</Text>
            </Pressable>
        </View>
    )
}

export default Label