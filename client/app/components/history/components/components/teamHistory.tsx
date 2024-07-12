import { Text, View } from "react-native"

import { ITeam } from "../../../../interface/Dashboard"

import { historyStyles } from "../../../../styles/history.styles"

const TeamHistory = ({ team }: { team: ITeam }) => {
  return (
    <View style={historyStyles.containerTeamHistory}>
      <Text style={historyStyles.nameTeamHistory}>{team.name}</Text>
      <Text style={historyStyles.pointsTeamHistory}>{team.points}</Text>
    </View>
  )
}

export default TeamHistory