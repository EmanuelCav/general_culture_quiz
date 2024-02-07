import { useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Labels from '../components/settings/labels'
import ButtonAccept from '../components/components/buttonAccept'
import UserSettings from '../components/settings/userSettings'
import Auth from '../components/settings/auth'

import { generalStyles } from '../styles/general.styles'

import { StackNavigation } from '../types/props.types'

import { IReducer } from '../interface/General'

import { selector } from '../helper/selector'

const Settings = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const [isAuthLogin, setIsAuthLogin] = useState<boolean>(false)

  const dispatch = useDispatch()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={generalStyles.containerGeneral}>
      {
        isAuthLogin && <Auth navigation={navigation} dispatch={dispatch} setIsAuthLogin={setIsAuthLogin} token={user.user.token!} />
      }
      <Labels />
      <UserSettings setIsAuthLogin={setIsAuthLogin} />
      <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
    </View>
  )
}

export default Settings