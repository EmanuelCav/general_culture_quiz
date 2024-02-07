import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BackHandler, View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import { userInfo } from '../server/reducers/user.reducer'
import { correctStatisticApi, countStatisticApi } from '../server/api/user.api'

import Question from '../components/playing/question'
import StatisticsGame from '../components/playing/statisticsGame'
import OptionsGame from '../components/playing/optionsGame'
import Answer from '../components/playing/answer'
import PreFinish from '../components/playing/preFinish'
import Finish from '../components/playing/finish'

import { IReducer } from '../interface/General'
import { IQuestion } from '../interface/Game'
import { StackNavigation } from '../types/props.types'

import { selector } from '../helper/selector'
import { generateOptions, getStatisticId } from '../helper/playing'

const Playing = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const game = useSelector((state: IReducer) => selector(state).game)

  const dispatch = useDispatch()

  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [realSeconds, setRealSeconds] = useState<number>(0)
  const [realMinutes, setRealMinutes] = useState<number>(0)

  const [numberQuestion, setNumberQuestion] = useState<number>(0)
  const [corrects, setCorrects] = useState<number>(0)

  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
  const [isPreFinish, setIsPreFinish] = useState<boolean>(false)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [isGameError, setIsGameError] = useState<boolean>(false)

  const [errors, setErrors] = useState<IQuestion[]>([])
  const [gameErrors, setGameErrors] = useState<IQuestion[]>([])

  const [options, setOptions] = useState<string[]>(generateOptions(game.game.questions![numberQuestion].options, user.user.user?.amountOptions!))

  const nextQuestion = (value: string) => {

    if (value === (!isGameError ? game.game.questions![numberQuestion].answer : gameErrors[numberQuestion].answer)) {
      setIsCorrect(true)
      setCorrects(corrects + 1)
    } else {
      if (!isGameError) {
        setErrors([...errors, game.game.questions![numberQuestion]])
      } else {
        setErrors([...errors, gameErrors[numberQuestion]])
      }

      setIsIncorrect(true)
    }

    if (!isGameError) {
      if (numberQuestion < game.game.questions!.length - 1) {
        setOptions(generateOptions(game.game.questions![numberQuestion + 1].options, user.user.user?.amountOptions!))
      }
      setRealSeconds(seconds)
      setRealMinutes(minutes)
    } else {
      if (numberQuestion < gameErrors.length - 1) {
        setOptions(generateOptions(gameErrors[numberQuestion + 1].options, user.user.user?.amountOptions!))
      }
    }

    if (numberQuestion === game.game.questions!.length - 1 || numberQuestion === gameErrors.length - 1) {
      setIsPreFinish(true)
      if (errors.length > 0) {
        setOptions(generateOptions(errors[0].options, user.user.user?.amountOptions!))
      }
    }

  }

  const continueGame = () => {
    setIsCorrect(false)
    setIsIncorrect(false)
    setRealSeconds(0)
    setRealMinutes(0)

    if (isPreFinish) return

    setNumberQuestion(numberQuestion + 1)
  }

  const preFinish = () => {
    setIsFinish(true)
  }

  const showErrors = () => {
    setIsCorrect(false)
    setIsIncorrect(false)
    setIsPreFinish(false)
    setIsFinish(false)
    setIsGameError(true)
    setNumberQuestion(0)
    setCorrects(0)
    setGameErrors(errors)
    setErrors([])
  }

  const continueHome = () => {
    navigation.navigate('Home')
  }

  const countQuestion = async () => {
    const { data } = await countStatisticApi(getStatisticId(user.user.user?.statistics!, game.game.questions![numberQuestion].category.category), user.user.token!)
    dispatch(userInfo(data))
  }

  const correctQuestion = async () => {
    const { data } = await correctStatisticApi(getStatisticId(user.user.user?.statistics!, game.game.questions![numberQuestion].category.category), user.user.token!)
    dispatch(userInfo(data))
  }

  useEffect(() => {
    if (!isGameError) {
      countQuestion()
    }
  }, [numberQuestion])

  useEffect(() => {
    if (isCorrect && !isGameError) {
      correctQuestion()
    }
  }, [corrects])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  return (
    <View style={generalStyles.containerGeneral}>
      <Question question={!isGameError ? game.game.questions![numberQuestion] : gameErrors[numberQuestion]} />
      {
        !isGameError &&
        <StatisticsGame minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes}
          questions={game.game.questions!.length} numberQuestion={numberQuestion + 1} realSeconds={realSeconds} realMinutes={realMinutes}
          isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish}
        />
      }
      {
        (isCorrect || isIncorrect) ?
          <Answer answer={isCorrect} correctAnswer={!isGameError ? game.game.questions![numberQuestion].answer : gameErrors[numberQuestion].answer} continueGame={continueGame} />
          :
          <OptionsGame options={options} nextQuestion={nextQuestion} amountOptions={user.user.user?.amountOptions!} />
      }
      {
        isPreFinish && <PreFinish preFinish={preFinish} />
      }
      {
        isFinish && <Finish seconds={realSeconds} minutes={realMinutes} corrects={corrects} questions={!isGameError ? game.game.questions!.length : gameErrors.length}
          showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} />
      }
    </View>
  )
}

export default Playing