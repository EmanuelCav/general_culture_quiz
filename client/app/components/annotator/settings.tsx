import { useState } from "react";
import { Pressable, Text, View } from "react-native"

import Setting from "./components/settings";
import UpdateTile from "./components/updateTitle";
import UpdateTeams from "./components/updateTeams";

import { SettingsPropsType } from "../../types/props.types";

import { annotatorStyles } from "../../styles/annotator.styles"

const Settings = ({ showSettings, restart, remove, quit, dashboard, dispatch }: SettingsPropsType) => {

    const [isUpdateTitle, setIsUpdateTitle] = useState<boolean>(false)
    const [isUpdateTeams, setIsUpdateTeams] = useState<boolean>(false)
    const [isPointsHistory, setIsPointsHistory] = useState<boolean>(false)

    const handleUpdateTitle = () => {
        setIsUpdateTitle(!isUpdateTitle)
    }

    const handleUpdateTeams = () => {
        setIsUpdateTeams(!isUpdateTeams)
    }

    const handlePointsHistory = () => {
        setIsPointsHistory(!isPointsHistory)
    }

    return (
        <View style={annotatorStyles.containerSettings}>
            {
                isUpdateTitle && <UpdateTile handleUpdate={handleUpdateTitle} dashboard={dashboard} dispatch={dispatch} />
            }
            {
                isUpdateTeams && <UpdateTeams handleUpdate={handleUpdateTeams} dashboard={dashboard} dispatch={dispatch} />
            }
            <View style={annotatorStyles.containSettings}>
                <Text style={annotatorStyles.textSettings}>Settings</Text>
                <Setting text="Update title" action={handleUpdateTitle} icon="pencil-box" color="#5555ff" pressedColor="#4444ff" />
                <Setting text="Update teams" action={handleUpdateTeams} icon="pencil-box-multiple" color="#5555ff" pressedColor="#4444ff" />
                <Setting text="Points history" action={handlePointsHistory} icon="clock-edit-outline" color="#5555ff" pressedColor="#4444ff" />
                <Setting text="Restart" action={restart} icon="restart" color="#ff5555" pressedColor="#ff4444" />
                <Setting text="Delete" action={remove} icon="delete" color="#ff5555" pressedColor="#ff4444" />
                <Setting text="Quit" action={quit} icon="keyboard-return" color="#ff5555" pressedColor="#ff4444" />
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