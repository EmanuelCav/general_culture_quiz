import { useEffect } from 'react';
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { StackNavigation } from '../types/props.types'

import Menu from '../components/home/menu'
import Banner from '../components/adds/banner'
import User from '../components/home/user'

import { generalStyles } from '../styles/general.styles'

import { IReducer } from '../interface/General';
import { firstTimeAction } from '../server/actions/user.actions';

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => state).user

  const dispatch = useDispatch()

  useEffect(() => {
    
    if(user.isLoggedIn) {
      console.log("User is Logged in");
      return
    }

    dispatch(firstTimeAction() as any)
    
  }, [])
  

  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <User />
      <Menu navigation={navigation} />
    </View>
  )
}

export default Home