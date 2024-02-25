import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import { StatisticsGamePropsType } from '../../types/props.types'

import Time from './components/statisticsGame/time'
import AmountQuestionsStatistic from './components/statisticsGame/amountQuestionsStatistic'
import Help from './components/statisticsGame/help'

const StatisticsGame = ({ seconds, minutes, setSeconds, setMinutes, setTotalSeconds, totalSeconds, numberQuestion, questions, realSeconds, realMinutes,
    isCorrect, isIncorrect, isFinish, isPreFinish, helps, isHelped, changeHelp, isGameError, isConnection }: StatisticsGamePropsType) => {
    return (
        <>
            {
                isGameError ? (
                    <View style={playingStyles.containerStatisticsGame}>
                        {
                            isConnection &&
                            <Help helps={helps} isAnswered={isCorrect || isIncorrect || isHelped || helps === 0} changeHelp={changeHelp} />
                        }
                    </View>
                ) : (
                    <View style={playingStyles.containerStatisticsGame}>
                        <Time seconds={seconds} minutes={minutes} setSeconds={setSeconds} setMinutes={setMinutes} setTotalSeconds={setTotalSeconds} totalSeconds={totalSeconds} realSeconds={realSeconds} realMinutes={realMinutes}
                            isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish} />
                        {
                            isConnection &&
                            <Help helps={helps} isAnswered={isCorrect || isIncorrect || isHelped || helps === 0} changeHelp={changeHelp} />
                        }
                        <AmountQuestionsStatistic numberQuestion={numberQuestion} questions={questions} />
                    </View>
                )
            }
        </>
    )
}

export default StatisticsGame