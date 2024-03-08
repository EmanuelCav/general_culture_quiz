import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BackHandler, View } from 'react-native'
import { InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { EXPO_INTERSTICIAL, EXPO_RECOMPESADO } from '@env';
import { AVPlaybackSource, Audio } from 'expo-av';

import { generalStyles } from '../styles/general.styles'

import { auth, userInfo } from '../server/reducers/user.reducer'
import { showGame } from '../server/reducers/game.reducer'
import { correctStatisticApi, countStatisticApi, helpsApi } from '../server/api/user.api'
import { experienceAction } from '../server/actions/user.actions'
import { generateQuestionApi } from '../server/api/game.api'

import Question from '../components/playing/question'
import StatisticsGame from '../components/playing/statisticsGame'
import OptionsGame from '../components/playing/optionsGame'
import Answer from '../components/playing/answer'
import PreFinish from '../components/playing/preFinish'
import Finish from '../components/playing/finish'

import { IReducer } from '../interface/General'
import { IQuestion } from '../interface/Game'
import { IPointsData } from '../interface/User'
import { PlayingPropsType } from '../types/props.types'
import { HelpType } from '../types/key.type'

import { selector } from '../helper/selector'
import { generateOptions, getStatisticId, helpsOptions } from '../helper/playing'

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : `${EXPO_INTERSTICIAL}`;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

const adUnitIdReward = __DEV__ ? TestIds.REWARDED : `${EXPO_RECOMPESADO}`;

const rewarded = RewardedAd.createForAdRequest(adUnitIdReward, {
  keywords: ['fashion', 'clothing'],
});

const Playing = ({ navigation, route }: PlayingPropsType) => {

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

  const [listen, setListen] = useState<Audio.Sound>()

  const playAudio = async (root: AVPlaybackSource) => {

    const { sound } = await Audio.Sound.createAsync(root)

    setListen(sound)

    await sound.playAsync()

  }

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
    if (route.params.isConnection) {
      interstitial.show()
    }

    navigation.navigate('Home')
  }

  const experienceUser = () => {
    dispatch(experienceAction({
      pointsData,
      token: user.user.token!
    }) as any)
  }

  const countQuestion = async () => {

    try {
      const { data } = await countStatisticApi(getStatisticId(user.user.user?.statistics!, game.game.questions![numberQuestion].category.category), user.user.token!)
      dispatch(userInfo(data))
    } catch (error) {
      console.log(error);
    }
  }

  const correctQuestion = async () => {

    try {

      const { data } = await correctStatisticApi(getStatisticId(user.user.user?.statistics!, game.game.questions![numberQuestion].category.category), game.game._id!, user.user.token!)
      dispatch(userInfo(data))

    } catch (error) {
      console.log(error);
    }
  }

  const changeHelp = async (type: HelpType) => {
    setIsHelped(true)
    setHelpType(type)

    if (type === 'add') {
      rewarded.show()
      setIsAdd(true)
    }
  }

  const handleHelp = async (type: HelpType) => {

    try {

      const { data } = await helpsApi(type, user.user.token!)
      dispatch(userInfo(data))

    } catch (error) {
      console.log(error);
    }
  }

  const generateQuestion = async () => {

    try {

      const { data } = await generateQuestionApi(route.params.allQuestions[numberQuestion + 5]._id, game.game._id!, user.user.token!)
      dispatch(showGame(data) as any)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    if (user.user.user?.isSounds) {
      return listen ? () => {
        listen.unloadAsync();
      } : undefined;
    }
  }, [listen]);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Loading add");
    });

    interstitial.load();

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      console.log("Loading add");
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    rewarded.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  useEffect(() => {
    if (!isGameError) {
      if (route.params.isConnection) {
        countQuestion()

        if (numberQuestion < (user.user.user?.amountQuestions! - 5)) {
          generateQuestion()
        }

      }
      setOptionsHelped(helpsOptions(options, game.game.questions![numberQuestion], user.user.user?.amountOptions!))

      return
    }

    setOptionsHelped(helpsOptions(options, gameErrors[numberQuestion], user.user.user?.amountOptions!))
  }, [numberQuestion])

  useEffect(() => {
    (async () => {
      if (user.user.user?.isSounds && isCorrect) {
        await playAudio(require('../../assets/success.mp3'))
        return
      }

      if (user.user.user?.isSounds && isIncorrect) {
        await playAudio(require('../../assets/error.mp3'))
      }
    })()
  }, [isCorrect, isIncorrect])

  useEffect(() => {
    if (isCorrect && !isGameError && route.params.isConnection) {
      correctQuestion()
    }
  }, [corrects])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  useEffect(() => {
    if (points !== 0 && route.params.isConnection) {
      experienceUser()
    }
  }, [points])

  useEffect(() => {
    if (isHelped && route.params.isConnection) {
      handleHelp(helpType)
    }
  }, [isHelped])

  return (
    <View style={generalStyles.containerGeneral}>
      <Question question={!isGameError ? game.game.questions![numberQuestion] : gameErrors[numberQuestion]} />
      <StatisticsGame minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} setTotalSeconds={setTotalSeconds} totalSeconds={totalSeconds}
        questions={user.user.user?.amountQuestions!} numberQuestion={numberQuestion + 1} realSeconds={realSeconds} realMinutes={realMinutes} isGameError={isGameError}
        isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish} helps={user.user.user?.helps!} isHelped={isHelped} changeHelp={changeHelp} isConnection={route.params.isConnection}
      />
      {
        (isCorrect || isIncorrect) ?
          <Answer answer={isCorrect} correctAnswer={!isGameError ? game.game.questions![numberQuestion].answer : gameErrors[numberQuestion].answer} continueGame={continueGame} />
          : <OptionsGame options={options} nextQuestion={nextQuestion} amountOptions={user.user.user?.amountOptions!} isHelped={isHelped} optionsHelped={optionsHelped} />
      }
      {
        isPreFinish && <PreFinish preFinish={preFinish} />
      }
      {
        isFinish && <Finish seconds={realSeconds} minutes={realMinutes} corrects={corrects} questions={!isGameError ? game.game.questions!.length : gameErrors.length}
          showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} points={points} changeHelp={changeHelp} isAdd={isAdd} isConnection={route.params.isConnection} />
      }
    </View>
  )
}

export default Playing