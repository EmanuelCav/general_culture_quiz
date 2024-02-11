import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BackHandler, View } from 'react-native'
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import { EXPO_INTERSTICIAL } from '@env';

import { generalStyles } from '../styles/general.styles'

import { userInfo } from '../server/reducers/user.reducer'
import { correctStatisticApi, countStatisticApi, helpsApi } from '../server/api/user.api'
import { experienceAction } from '../server/actions/user.actions'

import Question from '../components/playing/question'
import StatisticsGame from '../components/playing/statisticsGame'
import OptionsGame from '../components/playing/optionsGame'
import Answer from '../components/playing/answer'
import PreFinish from '../components/playing/preFinish'
import Finish from '../components/playing/finish'

import { IReducer } from '../interface/General'
import { IQuestion } from '../interface/Game'
import { IPointsData } from '../interface/User'
import { StackNavigation } from '../types/props.types'
import { HelpType } from '../types/key.type'

import { selector } from '../helper/selector'
import { generateOptions, getStatisticId, helpsOptions } from '../helper/playing'

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : `${EXPO_INTERSTICIAL}`;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

const Playing = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const game = useSelector((state: IReducer) => selector(state).game)

  const dispatch = useDispatch()

  const initialState: IPointsData = {
    points: 0
  }

  const [pointsData, setPointsData] = useState<IPointsData>(initialState)

  const { points } = pointsData

  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [realSeconds, setRealSeconds] = useState<number>(0)
  const [realMinutes, setRealMinutes] = useState<number>(0)
  const [totalSeconds, setTotalSeconds] = useState<number>(0)

  const [numberQuestion, setNumberQuestion] = useState<number>(0)
  const [corrects, setCorrects] = useState<number>(0)

  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
  const [isPreFinish, setIsPreFinish] = useState<boolean>(false)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [isGameError, setIsGameError] = useState<boolean>(false)
  const [isHelped, setIsHelped] = useState<boolean>(false)
  const [isAdd, setIsAdd] = useState<boolean>(false)

  const [helpType, setHelpType] = useState<HelpType>('help')

  const [errors, setErrors] = useState<IQuestion[]>([])
  const [gameErrors, setGameErrors] = useState<IQuestion[]>([])

  const [options, setOptions] = useState<string[]>(generateOptions(game.game.questions![numberQuestion].options, user.user.user?.amountOptions!))
  const [optionsHelped, setOptionsHelped] = useState<string[]>(helpsOptions(options, game.game.questions![numberQuestion], user.user.user?.amountOptions!))

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
    setIsHelped(false)
    setRealSeconds(0)
    setRealMinutes(0)

    if (isPreFinish) return

    setNumberQuestion(numberQuestion + 1)
  }

  const preFinish = () => {

    if (!isGameError) {
      setPointsData({
        points: Math.ceil((user.user.user?.amountOptions! * user.user.user?.amountQuestions! *
          user.user.user?.statistics?.filter(s => s.isSelect).length! * corrects) / (totalSeconds))
      })
    }

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
    setIsHelped(false)
    setErrors([])
    setOptionsHelped([])
  }

  const continueHome = () => {
    interstitial.show()
    navigation.navigate('Home')
  }

  const experienceUser = () => {
    dispatch(experienceAction({
      pointsData,
      token: user.user.token!
    }) as any)
  }

  const countQuestion = async () => {
    const { data } = await countStatisticApi(getStatisticId(user.user.user?.statistics!, game.game.questions![numberQuestion].category.category), user.user.token!)
    dispatch(userInfo(data))
  }

  const correctQuestion = async () => {
    const { data } = await correctStatisticApi(getStatisticId(user.user.user?.statistics!, game.game.questions![numberQuestion].category.category), user.user.token!)
    dispatch(userInfo(data))
  }

  const changeHelp = async (type: HelpType) => {
    setIsHelped(true)
    setHelpType(type)

    if (type === 'add') {
      setIsAdd(true)
    }
  }

  const handleHelp = async (type: HelpType) => {
    const { data } = await helpsApi(type, user.user.token!)
    dispatch(userInfo(data))
  }

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Loading add");
    });

    interstitial.load();

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isGameError) {
      countQuestion()
      setOptionsHelped(helpsOptions(options, game.game.questions![numberQuestion], user.user.user?.amountOptions!))

      return
    }

    setOptionsHelped(helpsOptions(options, gameErrors[numberQuestion], user.user.user?.amountOptions!))
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

  useEffect(() => {
    if (points !== 0) {
      experienceUser()
    }
  }, [points])

  useEffect(() => {
    if (isHelped) {
      handleHelp(helpType)
    }
  }, [isHelped])

  return (
    <View style={generalStyles.containerGeneral}>
      <Question question={!isGameError ? game.game.questions![numberQuestion] : gameErrors[numberQuestion]} />
      <StatisticsGame minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} setTotalSeconds={setTotalSeconds} totalSeconds={totalSeconds}
        questions={game.game.questions!.length} numberQuestion={numberQuestion + 1} realSeconds={realSeconds} realMinutes={realMinutes} isGameError={isGameError}
        isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish} helps={user.user.user?.helps!} isHelped={isHelped} changeHelp={changeHelp}
      />
      {
        (isCorrect || isIncorrect) ?
          <Answer answer={isCorrect} correctAnswer={!isGameError ? game.game.questions![numberQuestion].answer : gameErrors[numberQuestion].answer} continueGame={continueGame} />
          : <OptionsGame options={options} nextQuestion={nextQuestion} amountOptions={user.user.user?.amountOptions!} isHelped={isHelped}
            question={!isGameError ? game.game.questions![numberQuestion] : gameErrors[numberQuestion]} optionsHelped={optionsHelped} />
      }
      {
        isPreFinish && <PreFinish preFinish={preFinish} />
      }
      {
        isFinish && <Finish seconds={realSeconds} minutes={realMinutes} corrects={corrects} questions={!isGameError ? game.game.questions!.length : gameErrors.length}
          showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} points={points} changeHelp={changeHelp} isAdd={isAdd} />
      }
    </View>
  )
}

export default Playing