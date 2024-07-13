import { Pressable, Text } from "react-native"

import { MarkerPropsType } from "../../../types/props.types"

import { annotatorStyles } from "../../../styles/annotator.styles"

const Marker = ({ marker, handlePoints, index }: MarkerPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            annotatorStyles.markerButton  
        ]} onPress={() => handlePoints(marker, index)}>
            <Text style={annotatorStyles.textMarkerButton}>{marker}</Text>
        </Pressable>
    )
}

export default Marker