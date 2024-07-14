import { Pressable, Text, View } from "react-native"

import Setting from "./components/settings";

import { SettingsPropsType } from "../../types/props.types";

import { annotatorStyles } from "../../styles/annotator.styles"

const Settings = ({ showSettings, restart, remove }: SettingsPropsType) => {
    return (
        <View style={annotatorStyles.containerSettings}>
            <View style={annotatorStyles.containSettings}>
                <Text style={annotatorStyles.textSettings}>Settings</Text>
                <Setting text="Update title" action={remove} icon="pencil-box" color="#5555ff" pressedColor="#4444ff" />
                <Setting text="Points history" action={remove} icon="clock-edit-outline" color="#5555ff" pressedColor="#4444ff" />
                <Setting text="Restart" action={restart} icon="restart" color="#ff5555" pressedColor="#ff4444" />
                <Setting text="Delete" action={remove} icon="delete" color="#ff5555" pressedColor="#ff4444" />
                <Setting text="Quit" action={remove} icon="keyboard-return" color="#ff5555" pressedColor="#ff4444" />
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