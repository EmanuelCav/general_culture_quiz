import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AnnotatorScreen from '../components/annotator/annotatorScreen'
import Time from '../components/annotator/time'
import Markers from '../components/annotator/markers'
import Settings from '../components/annotator/settings'

import { updateDashboard } from '../server/reducers/dashboard.reducer'
import { removeDashboardAction } from '../server/actions/dashboard.actions'

import { generalStyles } from '../styles/general.styles'
import { annotatorStyles } from '../styles/annotator.styles'

import { IReducer } from '../interface/General'
import { IPoint, ITeam } from '../interface/Dashboard'
import { StackNavigation } from '../types/props.types'

import { selector } from '../helper/selector'

const Annotator = ({ navigation }: { navigation: StackNavigation }) => {

  const dashboard = useSelector((state: IReducer) => selector(state).dashboard)
  const user = useSelector((state: IReducer) => selector(state).user)

  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [isSettings, setIsSettings] = useState<boolean>(false)

  const [seconds, setSeconds] = useState<number>(dashboard.dashboard.seconds!)
  const [minutes, setMinutes] = useState<number>(dashboard.dashboard.minutes!)
  const [hours, setHours] = useState<number>(dashboard.dashboard.hours!)

  const dispatch = useDispatch()

  const showSettings = () => {
    setIsSettings(!isSettings)

    if (!isSettings || isStarted) {
      setIsStarted(false)
    }

  }

  const remove = () => {
    dispatch(removeDashboardAction({
      dashboard: dashboard.dashboard,
      navigation
    }) as any)
  }

  const restart = () => {
    setIsStarted(false)

    const teams = dashboard.dashboard.teams?.map(item => ({
      ...item,
      name: item.name,
      points: []
    }))

    dispatch(updateDashboard({
      seconds: 0,
      minutes: 0,
      hours: 0,
      category: dashboard.dashboard.category,
      id: dashboard.dashboard.id,
      markers: dashboard.dashboard.markers,
      name: dashboard.dashboard.name,
      teams,
      user: dashboard.dashboard.user,
      pointsHistory: []
    }))

    setSeconds(0)
    setMinutes(0)
    setHours(0)

    setIsSettings(false)
  }

  const quit = () => {

    navigation.goBack()

    dispatch(updateDashboard({
      seconds,
      minutes,
      hours,
      category: dashboard.dashboard.category,
      id: dashboard.dashboard.id,
      markers: dashboard.dashboard.markers,
      name: dashboard.dashboard.name,
      teams: dashboard.dashboard.teams,
      user: dashboard.dashboard.user,
      pointsHistory: dashboard.dashboard.pointsHistory
    }))
  }

  const handlePoints = (points: number, index: number) => {

    const newPoint: IPoint = {
      player: '',
      point: points,
      team: index
    }

    const addPoint = (p: IPoint[]): IPoint[] => {
      return [...p, newPoint]
    }

    const teams = dashboard.dashboard.teams?.map((t, i) => i === index ? {
      ...t,
      name: t.name,
      points: addPoint(t.points),
      sets: t.sets
    } : t)

    dispatch(updateDashboard({
      seconds: dashboard.dashboard.seconds,
      minutes: dashboard.dashboard.minutes,
      hours: dashboard.dashboard.hours,
      category: dashboard.dashboard.category,
      id: dashboard.dashboard.id,
      markers: dashboard.dashboard.markers,
      name: dashboard.dashboard.name,
      teams,
      user: dashboard.dashboard.user,
      pointsHistory: addPoint([...dashboard.dashboard.pointsHistory!])
    }))

  }

  const returnPoints = () => {

    let index = dashboard.dashboard.pointsHistory![dashboard.dashboard.pointsHistory?.length! - 1].team

    const removeLastPoint = (p: IPoint[]): IPoint[] => {
      return p.slice(0, -1);
    }

    const teams = dashboard.dashboard.teams?.map((t, i) => i === index ? {
      ...t,
      name: t.name,
      points: removeLastPoint(t.points),
      sets: t.sets
    } : t)

    dispatch(updateDashboard({
      seconds: dashboard.dashboard.seconds,
      minutes: dashboard.dashboard.minutes,
      hours: dashboard.dashboard.hours,
      category: dashboard.dashboard.category,
      id: dashboard.dashboard.id,
      markers: dashboard.dashboard.markers,
      name: dashboard.dashboard.name,
      teams,
      user: dashboard.dashboard.user,
      pointsHistory: removeLastPoint([...dashboard.dashboard.pointsHistory!])
    }))

  }

  const handleRestartTime = () => {

    setIsStarted(false)

    dispatch(updateDashboard({
      seconds: 0,
      minutes: 0,
      hours: 0,
      category: dashboard.dashboard.category,
      id: dashboard.dashboard.id,
      markers: dashboard.dashboard.markers,
      name: dashboard.dashboard.name,
      teams: dashboard.dashboard.teams,
      user: dashboard.dashboard.user,
      pointsHistory: dashboard.dashboard.pointsHistory
    }))

    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  const handleRunTime = () => {
    setIsStarted(!isStarted)
  }

  useEffect(() => {

    setTimeout(() => {

      if (isStarted) {
        if (seconds === 59) {
          setSeconds(0)
          setMinutes(minutes + 1)
        } else {
          setSeconds(seconds + 1)
        }

        if (minutes === 59 && seconds == 59) {
          setMinutes(0)
          setHours(hours + 1)
        }

      }

    }, 1000);

  }, [seconds, isStarted])

  return (
    <View style={generalStyles.containerGeneral}>
      {
        isSettings && <Settings showSettings={showSettings} restart={restart} remove={remove} quit={quit} dashboard={dashboard.dashboard} dispatch={dispatch} user={user.user} />
      }
      <Time hours={hours} minutes={minutes} seconds={seconds} handleRestartTime={handleRestartTime} handleRunTime={handleRunTime} isStarted={isStarted} user={user.user} />
      <View style={annotatorStyles.screenAnnotator}>
        <Markers markers={dashboard.dashboard.markers!} handlePoints={handlePoints} showSettings={showSettings} returnPoints={returnPoints} 
        historyLength={dashboard.dashboard.pointsHistory?.length!} user={user.user} />
        {
          dashboard.dashboard.teams?.map((team: ITeam, index: number) => {
            return <AnnotatorScreen team={team} index={index} handlePoints={handlePoints} user={user.user} key={index} />
          })
        }
      </View>
    </View>
  )
}

export default Annotator