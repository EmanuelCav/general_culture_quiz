import { useEffect, useState } from 'react';
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from "@react-native-community/netinfo";

import { StackNavigation } from '../types/props.types'
import { IReducer } from '../interface/General';

import Menu from '../components/home/menu'
import Banner from '../components/adds/banner'
import User from '../components/home/user'

import { generalStyles } from '../styles/general.styles'

import { firstTimeAction, loginAction } from '../server/actions/user.actions';
import { dateApi, usersApi } from '../server/api/user.api';
import { users } from '../server/reducers/user.reducer';

import { selector } from '../helper/selector';
import { isNewDate } from '../helper/date';

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const [isConnection, setIsConnection] = useState<boolean>(true)
  const [isChangeView, setIsChangeView] = useState<boolean>(false)

  const getNewDate = async () => {

    try {

      await dateApi(user.user.token!)

    } catch (error) {
      console.log(error);
    }

  }

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
    if (isConnection) {
      getUsers()
    }
  }, [])

  useEffect(() => {

    if (isConnection) {
      if (user.isLoggedIn) {
        dispatch(loginAction(user.user.user?._id!) as any)

        if (isNewDate(new Date(new Date().setHours(new Date().getHours() - 3)).toISOString().split("T")[0], user)) {
          getNewDate()
        }

        return
      }

      dispatch(firstTimeAction() as any)
    }

  }, [dispatch, user.isLoggedIn])


  return (
    <View style={generalStyles.containerGeneral}>
      {/* <Banner /> */}
      <User user={user.user.user!} />
      <Menu navigation={navigation} dispatch={dispatch} user={user} isConnection={isConnection} setIsChangeView={setIsChangeView} isChangeView={isChangeView} />
    </View>
  )
}

export default Home