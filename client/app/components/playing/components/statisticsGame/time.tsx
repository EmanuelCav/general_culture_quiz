import { Text } from 'react-native'
import { useEffect } from 'react'

import { TimePropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const Time = ({ seconds, minutes, setSeconds, setMinutes, realMinutes, realSeconds, isCorrect, isIncorrect, isFinish, isPreFinish }: TimePropsType) => {

    useEffect(() => {

        if (seconds === 60) {
            setSeconds(0)
            setMinutes(minutes + 1)
            return
        }

        if (minutes === 60) {
            return
        }

        setTimeout(() => {
            if (!isFinish && !isPreFinish) {
                if (!isCorrect && !isIncorrect) {
                    setSeconds(seconds + 1)
                }
            }
        }, 1000);

    }, [seconds, realSeconds])

    return (
        <Text style={playingStyles.textStatisticGame}>
            {(realMinutes > 0 ? realMinutes : minutes) < 10 ? `0${(realMinutes > 0) ? realMinutes : (minutes === 60) ? 0 : minutes}` : (realMinutes > 0) ? realMinutes : (minutes === 60) ? 0 : minutes}
            :
            {(realSeconds > 0 ? realSeconds : seconds) < 10 ? `0${(realSeconds > 0) ? realSeconds : (seconds === 60) ? 0 : seconds}` : (realSeconds > 0) ? realSeconds : (seconds === 60) ? 0 : seconds}
        </Text>
    )
}

export default Time