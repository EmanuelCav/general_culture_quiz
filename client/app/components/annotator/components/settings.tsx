import { Dimensions, Pressable, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { annotatorStyles } from "../../../styles/annotator.styles"

import { SettingPropsType } from "../../../types/props.types"

const Setting = ({ action, text, icon, color, pressedColor }: SettingPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? color : pressedColor
            },
            annotatorStyles.buttonActionSettings
        ]} onPress={action}>
            <Icon name={icon} color="#ffffff" size={Dimensions.get("window").height / 41} />
            <Text style={annotatorStyles.actionSettings}>{text}</Text>
        </Pressable>
    )
}

export default Setting