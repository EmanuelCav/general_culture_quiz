import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import TitleCategory from '../components/categories/titleCategory'
import ActionCategory from '../components/categories/actionCategory'
import ShowCategories from '../components/categories/showCategories'
import ButtonAccept from '../components/components/buttonAccept';

import { IReducer } from '../interface/General';
import { CategoriesPropsType } from '../types/props.types';

import { selector } from '../helper/selector';

import { playStyles } from '../styles/play.styles';

import { gameAction } from '../server/actions/game.actions';

const Categories = ({ navigation, route }: CategoriesPropsType) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const goBack = () => {
    if (route.params.isPlay) {
      dispatch(gameAction({
        navigation,
        token: user.user.token!
      }) as any)

      return
    }

    navigation.goBack()
  }

  return (
    <View style={playStyles.containerCategories}>
      <TitleCategory />
      <ActionCategory dispatch={dispatch} token={user.user.token!} />
      <ShowCategories dispatch={dispatch} user={user.user} />
      <ButtonAccept text={route.params.isPlay ? 'COMENZAR' : 'ACEPTAR'} func={goBack} isCategory={user.user.user?.statistics?.filter(s => s.isSelect).length === 0} />
    </View>
  )
}

export default Categories