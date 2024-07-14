import { Dimensions, Pressable, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Marker from "./components/marker"

import { MarkersPropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

const Markers = ({ markers, handlePoints, showSettings, returnPoints, historyLength, user }: MarkersPropsType) => {
    return (
        <View style={[annotatorStyles.containerMarker, { backgroundColor: user.palletteText }]}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : historyLength === 0 ? '#dddddd' : user.palletteBackground
                },
                annotatorStyles.buttonActionMarker
            ]} onPress={returnPoints} disabled={historyLength === 0}>
                <Icon name="arrow-left-drop-circle" color={user.palletteText} size={Dimensions.get("window").height / 47} />
            </Pressable>
            <View style={{ width: '70%', height: '100%' }}>
                <View style={annotatorStyles.containPointsAnnotator}>
                    {
                        markers.map((marker: number, index: number) => {
                            return <Marker marker={marker} user={user} handlePoints={handlePoints} index={0} key={index} />
                        })
                    }
                </View>
                <View style={annotatorStyles.containPointsAnnotator}>
                    {
                        markers.map((marker: number, index: number) => {
                            return <Marker marker={marker} user={user} handlePoints={handlePoints} index={1} key={index} />
                        })
                    }
                </View>
            </View>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground
                },
                annotatorStyles.buttonActionMarker
            ]} onPress={showSettings}>
                <Icon name="menu" color={user.palletteText} size={Dimensions.get("window").height / 43} />
            </Pressable>
        </View>
    )
}

export default Markers