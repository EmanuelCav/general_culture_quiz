import { Pressable, Text } from "react-native"

import { AnnotatorScreenPropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

import { calculatePoints, isAffectRival, pointsMarker } from "../../helper/functions"

const AnnotatorScreen = ({ team, handlePoints, index, user, category, rival }: AnnotatorScreenPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground,
                borderColor: user.palletteText,
                shadowColor: user.palletteText
            },
            annotatorStyles.containerScreenAnnotator
        ]} onPress={() => handlePoints(
            pointsMarker(1, category, calculatePoints(team.points), calculatePoints(rival.points)), index,
            isAffectRival(category, calculatePoints(team.points), calculatePoints(rival.points)))}>
            <Text style={[annotatorStyles.nameAnnotator, { color: user.palletteText }]}>{team.name}</Text>
            <Text style={[annotatorStyles.pointsAnnotator, { color: user.palletteText }]}>{team.points.length === 0 ? 0 : calculatePoints(team.points)}</Text>
        </Pressable>
    )
}

export default AnnotatorScreen