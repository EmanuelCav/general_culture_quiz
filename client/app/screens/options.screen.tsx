import { useState } from "react";
import { View } from 'react-native'
import { useSelector } from "react-redux";

import AmountOptions from '../components/options/amountOptions'
import AmountQuestions from '../components/options/amountQuestions'
import ButtonAccept from '../components/components/buttonAccept'

import { StackNavigation } from '../types/props.types'
import { IOptionUser } from "../interface/User";
import { IReducer } from "../interface/General";

import { generalStyles } from '../styles/general.styles'

import { selector } from "../helper/selector";

const Options = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const initialState: IOptionUser = {
    amountQuestions: user.user.user?.amountQuestions!,
    amountOptions: user.user.user?.amountOptions!
  }

  const [optionsUser, setOptionsUser] = useState<IOptionUser>(initialState)

  const { amountQuestions, amountOptions } = optionsUser

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={generalStyles.containerGeneral}>
      <AmountOptions amountOptions={amountOptions} setOptionsUser={setOptionsUser} />
      <AmountQuestions amountQuestions={amountQuestions} setOptionsUser={setOptionsUser} />
      <ButtonAccept func={goBack} text='ACEPTAR' />
    </View>
  )
}

export default Options