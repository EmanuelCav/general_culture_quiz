import { useState } from "react"
import { Pressable, Text, View } from "react-native"

import Input from "./components/input"

import { IUpdateTeams } from "../../../interface/Dashboard"
import { UpdateSettingsPropsType } from "../../../types/props.types"

import { updateDashboard } from "../../../server/reducers/dashboard.reducer"

import { annotatorStyles } from "../../../styles/annotator.styles"

const UpdateTeams = ({ handleUpdate, dashboard, dispatch }: UpdateSettingsPropsType) => {

    const initialState: IUpdateTeams = {
        team1: dashboard.teams![0].name,
        team2: dashboard.teams![1].name
    }

    const [message, setMessage] = useState<string>("")
    const [teamData, setTeamData] = useState<IUpdateTeams>(initialState)

    const { team1, team2 } = teamData

    const handleChangeTeam1 = (value: string) => {
        setTeamData({
            ...teamData,
            team1: value
        })
    }

    const handleChangeTeam2 = (value: string) => {
        setTeamData({
            ...teamData,
            team2: value
        })
    }

    const handleSumbit = () => {

        const teams = dashboard.teams?.map((t, i) => ({
            ...t,
            name: eval(`team${i + 1}`),
            points: t.points,
            sets: t.sets
        }))

        dispatch(updateDashboard({
            seconds: dashboard.seconds,
            minutes: dashboard.minutes,
            hours: dashboard.hours,
            category: dashboard.category,
            id: dashboard.id,
            markers: dashboard.markers,
            name: dashboard.name,
            teams,
            user: dashboard.user,
            pointsHistory: dashboard.pointsHistory
        }))

        handleUpdate()
    }

    return (
        <View style={annotatorStyles.containerSettings}>
            <View style={annotatorStyles.containSettings}>
                <Input handleChange={handleChangeTeam1} maxLength={25} placeholder="Team name" title="Team 1" value={team1} />
                <Input handleChange={handleChangeTeam2} maxLength={25} placeholder="Team name" title="Team 2" value={team2} />
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ffa420' : '#FF8C00'
                    },
                    annotatorStyles.buttonAcceptSettings
                ]} onPress={handleSumbit}>
                    <Text style={annotatorStyles.textAcceptSettings}>Accept</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default UpdateTeams