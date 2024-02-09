import { View, Text } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import { StatisticsFinishPropsType } from '../../../../types/props.types'

const StatisticsFinish = ({ seconds, minutes, questions, corrects, points }: StatisticsFinishPropsType) => {
    return (
        <View style={playingStyles.containerStatisticsFinish}>
            <Text style={playingStyles.textPreFinish}>Cantidad de preguntas: {questions}</Text>
            <Text style={playingStyles.textPreFinish}>Respuestas correctas: {corrects}</Text>
            <Text style={playingStyles.textPreFinish}>Puntos: {points}xp</Text>
            <Text style={playingStyles.textPreFinish}>Tiempo: {minutes < 10 ? `0${minutes}` : `${minutes}`}:{seconds < 10 ? `0${seconds}` : `${seconds}`}</Text>
        </View>
    )
}

export default StatisticsFinish