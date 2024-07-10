import { Dimensions, Pressable, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { IDashboardGenerator } from "../../interface/Dashboard"

import { generateStyles } from "../../styles/generate.styles";

const Item = ({ item }: { item: IDashboardGenerator }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            generateStyles.containerGenerate
        ]}>
            <Icon name={item.icon} color={'#ffffff'} size={Dimensions.get("window").height / 37} />
            <Text style={generateStyles.textGenerate} numberOfLines={1}>{item.name}</Text>
        </Pressable>
    )
}

export default Item