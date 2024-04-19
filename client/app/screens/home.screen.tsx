import { useEffect, useState } from 'react';
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from "@react-native-community/netinfo";

import { StackNavigation } from '../types/props.types'
import { IReducer } from '../interface/General';

import Menu from '../components/home/menu'
import Banner from '../components/adds/banner'
import User from '../components/home/user'
import Guest from '../components/home/Guest';

import { generalStyles } from '../styles/general.styles'

import { firstTimeAction, loginAction } from '../server/actions/user.actions';
import { usersApi } from '../server/api/user.api';
import { users } from '../server/reducers/user.reducer';

import { selector } from '../helper/selector';

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const [isConnection, setIsConnection] = useState<boolean>(true)
  const [isChangeView, setIsChangeView] = useState<boolean>(false)

  const getUsers = async () => {

    try {

      const { data } = await usersApi("total", user.user.token!)
      dispatch(users(data))

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
  }, [isConnection, isChangeView])

  useEffect(() => {
    if (isConnection && user.isLoggedIn) {
      getUsers()
    }
  }, [])

  useEffect(() => {

    if (isConnection) {
      if (user.isLoggedIn) {

        dispatch(loginAction(user.user.user?._id!) as any)

        return
      }

      dispatch(firstTimeAction() as any)
    }

  }, [dispatch, user.isLoggedIn])

  return (
    <View style={generalStyles.containerGeneral}>
      {
        isConnection ? (
          <>
            {
              user.isLoggedIn &&
              <>
                <Banner />
                <User user={user.user.user!} />
                <Menu navigation={navigation} dispatch={dispatch} user={user} isConnection={isConnection} setIsChangeView={setIsChangeView} isChangeView={isChangeView} />
              </>
            }
          </>
        ) : (
          <>
            <Guest />
            <Menu navigation={navigation} dispatch={dispatch} user={null} isConnection={isConnection} setIsChangeView={setIsChangeView} isChangeView={isChangeView} />
          </>
        )
      }
    </View>
  )
}

export default Home