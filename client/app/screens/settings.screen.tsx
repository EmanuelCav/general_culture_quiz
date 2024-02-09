import { useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Labels from '../components/settings/labels'
import ButtonAccept from '../components/components/buttonAccept'
import UserSettings from '../components/settings/userSettings'
import Auth from '../components/settings/auth'

import { userInfo } from '../server/reducers/user.reducer'
import { isImageApi, isSoundsApi } from '../server/api/user.api'

import { generalStyles } from '../styles/general.styles'

import { StackNavigation } from '../types/props.types'

import { IReducer } from '../interface/General'

import { selector } from '../helper/selector'

const Settings = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const [isAuthLogin, setIsAuthLogin] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)

  const dispatch = useDispatch()

  const goBack = () => {
    navigation.goBack()
  }

  const changeSound = async () => {
    const { data } = await isSoundsApi(user.user.token!)
    dispatch(userInfo(data))
  }

  const changeImage = async () => {
    const { data } = await isImageApi(user.user.token!)
    dispatch(userInfo(data))
  }

  const authAction = (value: boolean) => {
    setIsRegister(value)
  }

  return (
    <View style={generalStyles.containerGeneral}>
      {
        isAuthLogin && <Auth navigation={navigation} dispatch={dispatch} setIsAuthLogin={setIsAuthLogin} token={user.user.token!} isRegister={isRegister} />
      }
      <Labels user={user.user} />
      <UserSettings setIsAuthLogin={setIsAuthLogin} user={user.user} changeImage={changeImage} changeSound={changeSound} authAction={authAction} />
      <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
    </View>
  )
}

export default Settings