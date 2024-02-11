import { useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Labels from '../components/settings/labels'
import ButtonAccept from '../components/components/buttonAccept'
import UserSettings from '../components/settings/userSettings'
import Auth from '../components/settings/auth'
import CountryScreen from '../components/settings/countryScreen'

import { userInfo } from '../server/reducers/user.reducer'
import { countriesApi, countryApi, isImageApi, isSoundsApi } from '../server/api/user.api'

import { generalStyles } from '../styles/general.styles'

import { ICountry } from '../interface/User'
import { StackNavigation } from '../types/props.types'

import { IReducer } from '../interface/General'

import { selector } from '../helper/selector'

const Settings = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const [isAuthLogin, setIsAuthLogin] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [isCountry, setIsCountry] = useState<boolean>(false)

  const [countries, setCountries] = useState<ICountry[]>([])

  const dispatch = useDispatch()

  const goBack = () => {
    navigation.goBack()
  }

  const changeSound = async () => {

    try {

      const { data } = await isSoundsApi(user.user.token!)
      dispatch(userInfo(data))

    } catch (error) {
      console.log(error);
    }
  }

  const changeImage = async () => {

    try {

      const { data } = await isImageApi(user.user.token!)
      dispatch(userInfo(data))

    } catch (error) {
      console.log(error);
    }
  }

  const changeCountry = async () => {

    try {

      if (!isCountry) {
        const { data } = await countriesApi(user.user.token!)
        setCountries(data)
      }

      setIsCountry(!isCountry)

    } catch (error) {
      console.log(error);
    }

  }

  const updateCountry = async (id: string) => {

    try {

      const { data } = await countryApi(id, user.user.token!)
      dispatch(userInfo(data))

    } catch (error) {
      console.log(error);
    }
  }

  const authAction = (value: boolean) => {
    setIsRegister(value)
  }

  return (
    <View style={generalStyles.containerGeneral}>
      {
        isAuthLogin && <Auth navigation={navigation} dispatch={dispatch} setIsAuthLogin={setIsAuthLogin} token={user.user.token!} isRegister={isRegister} />
      }
      {
        isCountry && <CountryScreen countries={countries} changeCountry={changeCountry} user={user.user} updateCountry={updateCountry} />
      }
      <Labels user={user.user} changeCountry={changeCountry} />
      <UserSettings setIsAuthLogin={setIsAuthLogin} user={user.user} changeImage={changeImage} changeSound={changeSound} authAction={authAction} />
      <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
    </View>
  )
}

export default Settings