import { View } from 'react-native'

import ButtonFinish from './buttonFinish'

import { playingStyles } from '../../../../styles/playing.styles'

import { ActionsFinishPropsType } from '../../../../types/props.types'

const ActionsFinish = ({ areErrors, continueHome, showErrors }: ActionsFinishPropsType) => {
  return (
    <View style={[playingStyles.containerActionsFinish, {
      justifyContent: areErrors ? 'space-evenly' : 'center'
    }]}>
      {
        areErrors &&
        <ButtonFinish text='REPASAR ERRORES' func={showErrors} />
      }
      <ButtonFinish text='CONTINUAR' func={continueHome} />
    </View>
  )
}

export default ActionsFinish