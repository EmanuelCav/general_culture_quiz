import { Pressable, Text } from "react-native"

import { AnnotatorScreenPropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

import { calculatePoints } from "../../helper/functions"

const AnnotatorScreen = ({ team, handlePoints, index, user }: AnnotatorScreenPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground,
                borderColor: user.palletteText,
                shadowColor: user.palletteText
            },
            annotatorStyles.containerScreenAnnotator
        ]} onPress={() => handlePoints(1, index)}>
            <Text style={[annotatorStyles.nameAnnotator, { color: user.palletteText }]}>{team.name}</Text>
            <Text style={[annotatorStyles.pointsAnnotator, { color: user.palletteText }]}>{team.points.length === 0 ? 0 : calculatePoints(team.points)}</Text>
        </Pressable>
    )
}

export default AnnotatorScreen