import { useEffect, useState } from 'react';
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from "@react-native-community/netinfo";

import Banner from '../components/adds/banner'
import Title from '../components/home/title'
import Menu from '../components/home/menu'

import { generalStyles } from '../styles/general.styles'

import { createUserAction } from '../server/actions/user.actions';

import { StackNavigation } from '../types/props.types'
import { IReducer } from '../interface/General';

import { selector } from '../helper/selector';

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const dashboard = useSelector((state: IReducer) => selector(state).dashboard)

  const dispatch = useDispatch()

  const [isConnection, setIsConnection] = useState<boolean>(true)
  const [isChangeView, setIsChangeView] = useState<boolean>(false)

  useEffect(() => {
    if (!user.isLoggedIn) {
      dispatch(createUserAction() as any)
    }
  }, [])

  useEffect(() => {
    fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
  }, [isConnection, isChangeView])

  return (
    <View style={generalStyles.containerGeneral}>
      {
        // isConnection && <Banner />
      }
      <Title />
      <Menu navigation={navigation} dispatch={dispatch} dashboards={dashboard.dashboards} />
    </View>
  )
}

export default Home