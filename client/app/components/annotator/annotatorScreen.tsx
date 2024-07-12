import { Pressable, Text } from "react-native"

import { ITeam } from "../../interface/Dashboard"

import { annotatorStyles } from "../../styles/annotator.styles"

const AnnotatorScreen = ({ team }: { team: ITeam }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            annotatorStyles.containerScreenAnnotator
        ]} >
            <Text style={annotatorStyles.nameAnnotator}>{team.name}</Text>
            <Text style={annotatorStyles.pointsAnnotator}>{team.points}</Text>
        </Pressable>
    )
}

export default AnnotatorScreen