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

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={generalStyles.containerGeneral}>
      <UserStatistics user={user.profile} />
      <CategoryStatistics user={user.profile} />
      <ButtonAccept text='Aceptar' func={goBack} />
    </View>
  )
}

export default Statistics