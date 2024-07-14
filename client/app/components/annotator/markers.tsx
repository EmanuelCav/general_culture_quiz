import { Dimensions, Pressable, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Marker from "./components/marker"

import { MarkersPropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

const Markers = ({ markers, handlePoints, showSettings, returnPoints, historyLength }: MarkersPropsType) => {
    return (
        <View style={annotatorStyles.containerMarker}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : historyLength === 0 ? '#dddddd' : '#FF8C00'
                },
                annotatorStyles.buttonActionMarker
            ]} onPress={returnPoints} disabled={historyLength === 0}>
                <Icon name="arrow-left-drop-circle" color="#ffffff" size={Dimensions.get("window").height / 47} />
            </Pressable>
            <View style={{ width: '70%', height: '100%' }}>
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
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : '#FF8C00'
                },
                annotatorStyles.buttonActionMarker
            ]} onPress={showSettings}>
                <Icon name="menu" color="#ffffff" size={Dimensions.get("window").height / 43} />
            </Pressable>
        </View>
    )
}

export default Markers