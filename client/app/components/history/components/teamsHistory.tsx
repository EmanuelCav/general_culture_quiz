import { View } from 'react-native'

import TeamHistory from './components/teamHistory'

import { ITeam } from '../../../interface/Dashboard'

import { historyStyles } from '../../../styles/history.styles'

const TeamsHistory = ({ teams }: { teams: ITeam[] }) => {
    return (
        <View style={historyStyles.teamsHistory}>
            {
                teams.map((team: ITeam, index: number) => {
                    return <TeamHistory team={team} key={index} />
                })
            }
        </View>
    )
}

export default TeamsHistory