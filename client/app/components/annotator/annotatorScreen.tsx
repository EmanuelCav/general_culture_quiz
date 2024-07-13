import { Pressable, Text } from "react-native"

import { AnnotatorScreenPropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

const AnnotatorScreen = ({ team, handlePoints, index }: AnnotatorScreenPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            annotatorStyles.containerScreenAnnotator
        ]} onPress={() => handlePoints(1, index)}>
            <Text style={annotatorStyles.nameAnnotator}>{team.name}</Text>
            <Text style={annotatorStyles.pointsAnnotator}>{team.points}</Text>
        </Pressable>
    )
}

export default AnnotatorScreen