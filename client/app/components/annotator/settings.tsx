import { Dimensions, Pressable, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { SettingsPropsType } from "../../types/props.types";

import { annotatorStyles } from "../../styles/annotator.styles"

const Settings = ({ showSettings, restart, remove }: SettingsPropsType) => {
    return (
        <View style={annotatorStyles.containerSettings}>
            <View style={annotatorStyles.containSettings}>
                <Text style={annotatorStyles.textSettings}>Settings</Text>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ff4444' : '#ff5555'
                    },
                    annotatorStyles.buttonActionSettings
                ]} onPress={restart}>
                    <Icon name="restart" color="#ffffff" size={Dimensions.get("window").height / 41} />
                    <Text style={annotatorStyles.actionSettings}>Restart</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ff4444' : '#ff5555'
                    },
                    annotatorStyles.buttonActionSettings
                ]} onPress={remove}>
                    <Icon name="delete" color="#ffffff" size={Dimensions.get("window").height / 41} />
                    <Text style={annotatorStyles.actionSettings}>Delete</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ffa420' : '#FF8C00'
                    },
                    annotatorStyles.buttonActionSettings
                ]} onPress={showSettings}>
                    <Text style={annotatorStyles.actionSettings}>Come back</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Settings