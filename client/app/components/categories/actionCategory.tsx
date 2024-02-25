import { View } from 'react-native'

import ButtonSelect from './components/buttonSelect'

import { playStyles } from '../../styles/play.styles'

import { categoryAllAction } from '../../server/actions/user.actions'

import { ActionCategoryPropsType } from '../../types/props.types'

const ActionCategory = ({ dispatch, token }: ActionCategoryPropsType) => {

  const changeAllCategory = (query: boolean) => {
    dispatch(categoryAllAction({
      query,
      token
    }) as any)
  }

  return (
    <View style={playStyles.containActionCategory}>
      <ButtonSelect text='Seleccionar todo' func={changeAllCategory} query={true} />
      <ButtonSelect text='Quitar todo' func={changeAllCategory} query={false} />
    </View>
  )
}

export default ActionCategory