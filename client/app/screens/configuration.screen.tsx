import { useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Pallettes from '../components/configuration/pallettes'
import Language from '../components/configuration/language'
import ListConfig from '../components/configuration/listConfig'
import Accept from '../components/configuration/accept'

import { generalStyles } from '../styles/general.styles'
import { configurationStyles } from '../styles/configuration.styles'

import { updateBackground, updateLanguage, updateText } from '../server/reducers/user.reducer'

import { IReducer } from '../interface/General'
import { StackNavigation } from '../types/props.types'

import { selector } from '../helper/selector'
import { colors, languages } from '../helper/config'

const Configuration = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const [isBackground, setIsBackground] = useState<boolean>(false)
  const [isText, setIsText] = useState<boolean>(false)
  const [isLanguage, setIsLanguage] = useState<boolean>(false)

  const [list, setList] = useState<string[]>([])

  const backgroundSelect = () => {
    setIsBackground(!isBackground)
    setList(colors)
  }

  const colorSelect = () => {
    setIsText(!isText)
    setList(colors)
  }

  const languageSelect = () => {
    setIsLanguage(!isLanguage)
    setList(languages)
  }

  const selectOption = (action: any) => {

    if(isBackground) {
      dispatch(updateBackground(action))
      setIsBackground(false)
    } else if (isText) {
      dispatch(updateText(action))
      setIsText(false)
    } else {
      dispatch(updateLanguage(action))
      setIsLanguage(false)
    }

  }

  return (
    <View style={generalStyles.containerGeneral}>
      {
        (isBackground || isText || isLanguage) &&
        <ListConfig list={(isBackground || isText) ? isBackground ? list.filter(l => l !== user.user.palletteText) : list.filter(l => l !== user.user.palletteBackground) : list}
          isColor={isBackground || isText} func={selectOption} />
      }
      <View style={configurationStyles.containerConfiguration}>
        <Text style={configurationStyles.textConfiguration}>Configuration</Text>
        <View style={configurationStyles.containConfig}>
          <Pallettes user={user.user} colorSelect={colorSelect} backgroundSelect={backgroundSelect} />
          <Language user={user.user} languageSelect={languageSelect} />
        </View>
        <Accept func={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default Configuration