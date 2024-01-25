import { useState } from "react";
import { View } from 'react-native'

import AmountOptions from '../components/options/amountOptions'
import AmountQuestions from '../components/options/amountQuestions'
import ButtonAccept from '../components/components/buttonAccept'

import { StackNavigation } from '../types/props.types'

import { generalStyles } from '../styles/general.styles'
import { IOptionUser } from "../interface/User";

const Options = ({ navigation }: { navigation: StackNavigation }) => {

  const initialState: IOptionUser = {
    amountQuestions: 10,
    amountOptions: 4
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
      <ButtonAccept func={goBack} text='Aceptar' />
    </View>
  )
}

export default Options