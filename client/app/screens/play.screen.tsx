import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { generalStyles } from '../styles/general.styles'

import Banner from '../components/adds/banner'
import MenuPlay from '../components/play/menuPlay'

import { StackNavigation } from '../types/props.types'
import { IReducer } from '../interface/General'

import { selector } from '../helper/selector'

const Play = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <MenuPlay navigation={navigation} user={user.user} />
    </View>
  )
}

export default Play