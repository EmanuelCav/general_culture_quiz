import { useState } from "react"
import { Pressable, Text, View } from "react-native"

import Input from "./components/input"

import { annotatorStyles } from "../../../styles/annotator.styles"

import { updateDashboard } from "../../../server/reducers/dashboard.reducer"

import { IUpdateTitle } from "../../../interface/Dashboard"
import { UpdateSettingsPropsType } from "../../../types/props.types"

const UpdateTile = ({ handleUpdate, dashboard, dispatch }: UpdateSettingsPropsType) => {

    const initialState: IUpdateTitle = {
        name: dashboard.name!
    }

    const [message, setMessage] = useState<string>("")
    const [teamData, setTeamData] = useState<IUpdateTitle>(initialState)

    const { name } = teamData

    const handleChange = (value: string) => {
        setTeamData({
            ...teamData,
            name: value
        })
    }

    const handleSumbit = () => {

        dispatch(updateDashboard({
            seconds: dashboard.seconds,
            minutes: dashboard.minutes,
            hours: dashboard.hours,
            category: dashboard.category,
            id: dashboard.id,
            markers: dashboard.markers,
            name: name,
            teams: dashboard.teams,
            user: dashboard.user,
            pointsHistory: dashboard.pointsHistory
        }))

        handleUpdate()
    }

    return (
        <View style={annotatorStyles.containerSettings}>
            <View style={annotatorStyles.containSettings}>
                <Input handleChange={handleChange} maxLength={30} placeholder="Marker title" title="Marker title" value={name} />
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ffa420' : '#FF8C00'
                    },
                    annotatorStyles.buttonAcceptSettings
                ]} onPress={handleSumbit}>
                    <Text style={annotatorStyles.textAcceptSettings}>Accept</Text>
                </Pressable>
            </View>
        </View >
    )
}

export default UpdateTile