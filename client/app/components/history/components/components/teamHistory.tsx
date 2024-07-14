import { Text, View } from "react-native"

import { TeamHistoryPropsType } from "../../../../types/props.types"

import { historyStyles } from "../../../../styles/history.styles"

import { calculatePoints } from "../../../../helper/functions"

const TeamHistory = ({ team, user }: TeamHistoryPropsType) => {
  return (
    <View style={historyStyles.containerTeamHistory}>
      <Text style={[historyStyles.nameTeamHistory, { color: user.palletteText }]}>{team.name}</Text>
      <Text style={[historyStyles.pointsTeamHistory, { color: user.palletteText }]}>
        {team.points.length === 0 ? 0 : calculatePoints(team.points)}
      </Text>
    </View>
  )
}

export default TeamHistory