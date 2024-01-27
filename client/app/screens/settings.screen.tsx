import { View } from 'react-native'

import Labels from '../components/settings/labels'
import ButtonAccept from '../components/components/buttonAccept'
import UserSettings from '../components/settings/userSettings'

import { generalStyles } from '../styles/general.styles'

import { StackNavigation } from '../types/props.types'

const Settings = ({ navigation }: { navigation: StackNavigation }) => {

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={generalStyles.containerGeneral}>
      <Labels />
      <UserSettings />
      <ButtonAccept text='ACEPTAR' func={goBack} />
    </View>
  )
}

export default Settings