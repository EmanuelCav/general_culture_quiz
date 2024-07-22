import { Dimensions, Pressable, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TimePropsType } from "../../../types/props.types"

import { annotatorStyles } from "../../../styles/annotator.styles"

const Time = ({ minutes, seconds, hours, handleRestartTime, handleRunTime, isStarted, user }: TimePropsType) => {
    return (
        <View style={annotatorStyles.containerTime}>
            <Text style={[annotatorStyles.textTime, { color: user.palletteBackground }]}>
                {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
            <View style={annotatorStyles.containerActionsTime}>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : (isStarted || (hours === 0 && minutes === 0 && seconds === 0)) ? '#dddddd' : user.palletteBackground
                    },
                    annotatorStyles.buttonAgainTime
                ]} onPress={handleRestartTime} disabled={isStarted || (hours === 0 && minutes === 0 && seconds === 0)}>
                    <Icon name="restart" size={Dimensions.get("window").height / 37} color={user.palletteText} />
                </Pressable>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground
                    },
                    annotatorStyles.buttonAgainTime
                ]} onPress={handleRunTime}>
                    <Icon name={isStarted ? "pause" : "play"} size={Dimensions.get("window").height / 37} color={user.palletteText} />
                </Pressable>
            </View>
        </View>
    )
}

export default Time