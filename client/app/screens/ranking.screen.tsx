import { useState, useEffect } from 'react';
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { IReducer } from '../interface/General';
import { StackNavigation } from '../types/props.types';
import { RankingDateType, RankingTextType } from '../types/key.type';

import { selector } from '../helper/selector';

import { generalStyles } from '../styles/general.styles';

import ButtonAccept from '../components/components/buttonAccept';
import UsersRanking from '../components/ranking/usersRanking';
import RankingTags from '../components/ranking/rankingTags';
import Position from '../components/ranking/position';

import { usersRankingAction } from '../server/actions/user.actions';

const Ranking = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const [rankingText, setRankingText] = useState<RankingTextType>('Total')
  const [rankingDate, setRankingDate] = useState<RankingDateType>('total')

  const changeRanking = (valueText: RankingTextType, valueDate: RankingDateType) => {
    setRankingText(valueText)
    setRankingDate(valueDate)
  }

  const goBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    dispatch(usersRankingAction({
      date: rankingDate,
      navigation,
      token: user.user.token!,
      isNavigate: false
    }) as any)
  }, [rankingDate])

  return (
    <View style={generalStyles.containerGeneral}>
      <Position ranking={user.users.ranking!} user={user.user} />
      <RankingTags changeRanking={changeRanking} rankingText={rankingText} />
      <UsersRanking user={user} navigation={navigation} />
      <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
    </View>
  )
}

export default Ranking