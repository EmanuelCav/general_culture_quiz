import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { IReducer } from '../interface/General'
import { StackNavigation } from '../types/props.types'

import { selector } from '../helper/selector'

import { generalStyles } from '../styles/general.styles'

import UserStatistics from '../components/statistics/userStatistics'
import CategoryStatistics from '../components/statistics/categoryStatistics'
import ButtonAccept from '../components/components/buttonAccept'

const Statistics = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const game = useSelector((state: IReducer) => selector(state).game)

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={generalStyles.containerGeneral}>
      <UserStatistics user={user.profile} games={game.games} />
      <CategoryStatistics user={user.profile} />
      <ButtonAccept text='ACEPTAR' func={goBack} />
    </View>
  )
}

export default Statistics