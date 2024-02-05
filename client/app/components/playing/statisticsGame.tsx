import React from 'react'
import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import { StatisticsGamePropsType } from '../../types/props.types'

import Time from './components/statisticsGame/time'
import AmountQuestionsStatistic from './components/statisticsGame/amountQuestionsStatistic'

const StatisticsGame = ({ seconds, minutes, setSeconds, setMinutes, numberQuestion, questions }: StatisticsGamePropsType) => {
    return (
        <View style={playingStyles.containerStatisticsGame}>
            <Time seconds={seconds} minutes={minutes} setSeconds={setSeconds} setMinutes={setMinutes} />
            <AmountQuestionsStatistic numberQuestion={numberQuestion} questions={questions} />
        </View>
    )
}

export default StatisticsGame