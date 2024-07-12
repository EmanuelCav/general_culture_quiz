import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import AnnotatorScreen from '../components/annotator/annotatorScreen'
import Time from '../components/annotator/time'

import { updateDashboard } from '../server/reducers/dashboard.reducer'

import { generalStyles } from '../styles/general.styles'

import { IReducer } from '../interface/General'
import { ITeam } from '../interface/Dashboard'

import { selector } from '../helper/selector'

const Annotator = () => {

  const dashboard = useSelector((state: IReducer) => selector(state).dashboard)

  const [isStarted, setIsStarted] = useState<boolean>(false)

  const [seconds, setSeconds] = useState<number>(dashboard.dashboard.seconds!)
  const [minutes, setMinutes] = useState<number>(dashboard.dashboard.minutes!)
  const [hours, setHours] = useState<number>(dashboard.dashboard.hours!)

  const dispatch = useDispatch()

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
        }))
      }

    }, 1000);

  }, [seconds, isStarted])

  return (
    <View style={generalStyles.containerGeneral}>
      <Time hours={hours} minutes={minutes} seconds={seconds} handleRestartTime={handleRestartTime} handleRunTime={handleRunTime} isStarted={isStarted} />
      {
        dashboard.dashboard.teams?.map((team: ITeam, index: number) => {
          return <AnnotatorScreen team={team} key={index} />
        })
      }
    </View>
  )
}

export default Annotator