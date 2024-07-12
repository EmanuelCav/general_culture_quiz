import { View } from 'react-native'
import { useSelector } from 'react-redux'

import AnnotatorScreen from '../components/annotator/annotatorScreen'
import Time from '../components/annotator/time'

import { generalStyles } from '../styles/general.styles'

import { IReducer } from '../interface/General'
import { ITeam } from '../interface/Dashboard'

import { selector } from '../helper/selector'

const Annotator = () => {

  const dashboard = useSelector((state: IReducer) => selector(state).dashboard)

  return (
    <View style={generalStyles.containerGeneral}>
      <Time hours={dashboard.dashboard.hours!} minutes={dashboard.dashboard.minutes!} seconds={dashboard.dashboard.seconds!} />
      {
        dashboard.dashboard.teams?.map((team: ITeam, index: number) => {
          return <AnnotatorScreen team={team} key={index} />
        })
      }
    </View>
  )
}

export default Annotator