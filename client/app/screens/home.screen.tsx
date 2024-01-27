import { useEffect } from 'react';
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { StackNavigation } from '../types/props.types'

import Menu from '../components/home/menu'
import Banner from '../components/adds/banner'
import User from '../components/home/user'

import { generalStyles } from '../styles/general.styles'

import { IReducer } from '../interface/General';

import { firstTimeAction, loginAction } from '../server/actions/user.actions';

import { selector } from '../helper/selector';

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  useEffect(() => {
    
    if(user.isLoggedIn) {
      dispatch(loginAction(user.user.user?._id!) as any)
      return
    }

    dispatch(firstTimeAction() as any)
    
  }, [user.isLoggedIn])
  

  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <User user={user.user.user!} />
      <Menu navigation={navigation} />
    </View>
  )
}

export default Home