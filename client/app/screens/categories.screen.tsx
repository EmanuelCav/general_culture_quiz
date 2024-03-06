import { View } from 'react-native'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { fetch } from "@react-native-community/netinfo";

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

  const [isConnection, setIsConnection] = useState<boolean>(true)

  const goBack = () => {
    if (route.params.isPlay) {
      dispatch(gameAction({
        navigation,
        token: user.user.token!,
        isConnection
      }) as any)

      return
    }

    navigation.goBack()
  }

  // useEffect(() => {
  //   fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
  // }, [isConnection, isChangeView])

  return (
    <View style={playStyles.containerCategories}>
      <TitleCategory />
      <ActionCategory dispatch={dispatch} token={user.user.token!} />
      <ShowCategories dispatch={dispatch} user={user.user} />
      <ButtonAccept text={route.params.isPlay ? 'COMENZAR' : 'ACEPTAR'} func={goBack} isCategory={route.params.isPlay ? user.user.user?.statistics?.filter(s => s.isSelect).length === 0 : false} />
    </View>
  )
}

export default Categories