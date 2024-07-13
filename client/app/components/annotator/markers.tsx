import { View } from "react-native"

import Marker from "./components/marker"

import { MarkersPropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

const Markers = ({ markers, handlePoints }: MarkersPropsType) => {
    return (
        <View style={annotatorStyles.containerMarker}>
            <View style={annotatorStyles.containPointsAnnotator}>
                {
                    markers.map((marker: number, index: number) => {
                        return <Marker marker={marker} handlePoints={handlePoints} index={0} key={index} />
                    })
                }
            </View>
            <View style={annotatorStyles.containPointsAnnotator}>
                {
                    markers.map((marker: number, index: number) => {
                        return <Marker marker={marker} handlePoints={handlePoints} index={1} key={index} />
                    })
                }
            </View>
        </View>
    )
}

export default Markers