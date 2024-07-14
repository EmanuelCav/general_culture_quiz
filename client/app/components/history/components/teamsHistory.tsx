import { View } from 'react-native'

import TeamHistory from './components/teamHistory'

import { ITeam } from '../../../interface/Dashboard'
import { TeamsHistoryPropsType } from '../../../types/props.types'

import { historyStyles } from '../../../styles/history.styles'

const TeamsHistory = ({ teams, user }: TeamsHistoryPropsType) => {
    return (
        <View style={historyStyles.teamsHistory}>
            {
                teams.map((team: ITeam, index: number) => {
                    return <TeamHistory team={team} user={user} key={index} />
                })
            }
        </View>
    )
}

export default TeamsHistory