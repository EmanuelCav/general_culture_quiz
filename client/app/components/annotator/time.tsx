import { Dimensions, Pressable, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TimePropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

const Time = ({ minutes, seconds, hours, handleRestartTime, handleRunTime, isStarted }: TimePropsType) => {
    return (
        <View style={annotatorStyles.containerTime}>
            <Text style={annotatorStyles.textTime}>{hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</Text>
            <View style={annotatorStyles.containerActionsTime}>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ffa420' : (isStarted || (hours === 0 && minutes === 0 && seconds === 0)) ? '#dddddd' : '#FF8C00'
                    },
                    annotatorStyles.buttonAgainTime
                ]} onPress={handleRestartTime} disabled={isStarted || (hours === 0 && minutes === 0 && seconds === 0)}>
                    <Icon name="restart" size={Dimensions.get("window").height / 37} color={'#ffffff'} />
                </Pressable>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#ffa420' : '#FF8C00'
                    },
                    annotatorStyles.buttonAgainTime
                ]} onPress={handleRunTime}>
                    <Icon name={isStarted ? "pause" : "play"} size={Dimensions.get("window").height / 37} color={'#ffffff'} />
                </Pressable>
            </View>
        </View>
    )
}

export default Time