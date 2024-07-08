import { useEffect, useState } from 'react';
import { View } from 'react-native'
import { useDispatch } from 'react-redux';
import { fetch } from "@react-native-community/netinfo";

import { StackNavigation } from '../types/props.types'

import Banner from '../components/adds/banner'
import Title from '../components/home/title'
import Menu from '../components/home/menu'

import { generalStyles } from '../styles/general.styles'

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const dispatch = useDispatch()

  const [isConnection, setIsConnection] = useState<boolean>(true)
  const [isChangeView, setIsChangeView] = useState<boolean>(false)

  useEffect(() => {
    fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
  }, [isConnection, isChangeView])

  return (
    <View style={generalStyles.containerGeneral}>
      {
        // isConnection && <Banner />
      }
      <Title />
      <Menu navigation={navigation} dispatch={dispatch} isConnection={isConnection} setIsChangeView={setIsChangeView} isChangeView={isChangeView} />
    </View>
  )
}

export default Home