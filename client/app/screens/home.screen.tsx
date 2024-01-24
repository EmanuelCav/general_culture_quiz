import { View } from 'react-native'

import { StackNavigation } from '../types/props.types'

import Menu from '../components/home/menu'
import Banner from '../components/adds/banner'
import User from '../components/home/user'

import { generalStyles } from '../styles/general.styles'

const Home = ({ navigation }: { navigation: StackNavigation }) => {
  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <User />
      <Menu navigation={navigation} />
    </View>
  )
}

export default Home