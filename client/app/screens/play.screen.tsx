import { useState, useEffect } from "react";
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetch } from "@react-native-community/netinfo";

import { generalStyles } from '../styles/general.styles'

import { dateApi } from "../server/api/user.api";

import Banner from '../components/adds/banner'
import MenuPlay from '../components/play/menuPlay'

import { StackNavigation } from '../types/props.types'
import { IReducer } from '../interface/General'

import { selector } from '../helper/selector'
import { isNewDate } from "../helper/date";

const Play = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const [isConnection, setIsConnection] = useState<boolean>(true)
  const [isChangeView, setIsChangeView] = useState<boolean>(true)

  const getNewDate = async () => {

    try {

      await dateApi(user.user.token!)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
  }, [isConnection, isChangeView])

  useEffect(() => {
    if (isConnection && user.isLoggedIn) {
      if (isNewDate(new Date(new Date().setHours(new Date().getHours() - 3)).toISOString().split("T")[0], user)) {
        getNewDate()
      }
    }
  }, [isChangeView, isConnection])

  return (
    <View style={generalStyles.containerGeneral}>
      {
        isConnection && <Banner />
      }
      <MenuPlay navigation={navigation} user={user.user} dispatch={dispatch} isConnection={isConnection} setIsChangeView={setIsChangeView} isChangeView={isChangeView} />
    </View>
  )
}

export default Play