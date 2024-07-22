import { Dimensions, Pressable, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Time from "./components/time"

import { HeaderAnnotatorPropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

const HeaderAnnotator = ({ minutes, seconds, hours, handleRestartTime, handleRunTime, isStarted, user, handleSpin, quit }: HeaderAnnotatorPropsType) => {
    return (
        <View style={annotatorStyles.headerAnnotator}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground
                },
                annotatorStyles.buttonAgainTime
            ]} onPress={quit}>
                <Icon name="arrow-left" size={Dimensions.get("window").height / 37} color={'#ffffff'} />
            </Pressable>
            <Time minutes={minutes} seconds={seconds} hours={hours} handleRestartTime={handleRestartTime} handleRunTime={handleRunTime} isStarted={isStarted} user={user} />
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground
                },
                annotatorStyles.buttonAgainTime
            ]} onPress={handleSpin}>
                <Icon name="refresh-circle" size={Dimensions.get("window").height / 37} color={'#ffffff'} />
            </Pressable>
        </View>
    )
}

export default HeaderAnnotator