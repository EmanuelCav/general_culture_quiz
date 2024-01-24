import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import Banner from '../components/adds/banner'
import MenuPlay from '../components/play/menuPlay'

import { StackNavigation } from '../types/props.types'

const Play = ({ navigation }: { navigation: StackNavigation }) => {
  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <MenuPlay navigation={navigation} />
    </View>
  )
}

export default Play