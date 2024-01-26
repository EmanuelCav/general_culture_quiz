import { View } from 'react-native'

import ButtonSelect from './components/buttonSelect'

import { playStyles } from '../../styles/play.styles'

const ActionCategory = () => {
  return (
    <View style={playStyles.containActionCategory}>
        <ButtonSelect text='Seleccionar todo' />
        <ButtonSelect text='Quitar todo' />
    </View>
  )
}

export default ActionCategory