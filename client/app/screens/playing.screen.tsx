import { useState } from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import Question from '../components/playing/question'
import StatisticsGame from '../components/playing/statisticsGame'
import OptionsGame from '../components/playing/optionsGame'

import { IReducer } from '../interface/General'

import { selector } from '../helper/selector'

const Playing = () => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const game = useSelector((state: IReducer) => selector(state).game)

  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)

  const [numberQuestion, setNumberQuestion] = useState<number>(0)

  return (
    <View style={generalStyles.containerGeneral}>
      <Question />
      <StatisticsGame seconds={seconds} minutes={minutes} setSeconds={setSeconds} setMinutes={setMinutes} numberQuestion={numberQuestion} questions={game.game.questions?.length!} />
      <OptionsGame />
    </View>
  )
}

export default Playing