import { Text, View } from "react-native"

import { TimePropsType } from "../../types/props.types"

import { annotatorStyles } from "../../styles/annotator.styles"

const Time = ({ minutes, seconds, hours }: TimePropsType) => {
    return (
        <View style={annotatorStyles.containerTime}>
            <Text style={annotatorStyles.textTime}>{hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</Text>
        </View>
    )
}

export default Time