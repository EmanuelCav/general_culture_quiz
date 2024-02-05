import { Text } from 'react-native'
import { useEffect } from 'react'

import { TimePropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const Time = ({ seconds, minutes, setSeconds, setMinutes }: TimePropsType) => {

    useEffect(() => {

        if (seconds === 60) {
            setMinutes(minutes + 1)
        }

        setTimeout(() => {
            setSeconds(seconds + 1)
        }, 1000);

    }, [seconds])

    return (
        <Text style={playingStyles.textStatisticGame}>
            {minutes >= 10 ? `${minutes}` : `0${minutes}`}
            :
            {seconds >= 10 ? `${seconds}` : `0${seconds}`}
        </Text>
    )
}

export default Time