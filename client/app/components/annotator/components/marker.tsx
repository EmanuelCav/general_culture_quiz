import { Pressable, Text } from "react-native"

import { MarkerPropsType } from "../../../types/props.types"

import { annotatorStyles } from "../../../styles/annotator.styles"

const Marker = ({ marker, handlePoints, index, user }: MarkerPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground
            },
            annotatorStyles.markerButton  
        ]} onPress={() => handlePoints(marker, index)}>
            <Text style={[annotatorStyles.textMarkerButton, { color: user.palletteText }]}>{marker}</Text>
        </Pressable>
    )
}

export default Marker