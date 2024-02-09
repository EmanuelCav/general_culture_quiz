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
import CountryRanking from '../components/ranking/countryRanking';

import { rankingCountryAction, usersRankingAction } from '../server/actions/user.actions';

const Ranking = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const [isUser, setIsUser] = useState<boolean>(true)
  const [rankingText, setRankingText] = useState<RankingTextType>('Total')
  const [rankingDate, setRankingDate] = useState<RankingDateType>('total')

  const changeRanking = (valueText: RankingTextType, valueDate: RankingDateType) => {
    setRankingText(valueText)
    setRankingDate(valueDate)
  }

  const changeIcon = () => {
    setIsUser(!isUser)
  }

  const goBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (isUser) {
      dispatch(usersRankingAction({
        date: rankingDate,
        navigation,
        token: user.user.token!,
        isNavigate: false
      }) as any)

      return
    }

    dispatch(rankingCountryAction({
      date: rankingDate,
      token: user.user.token!
    }) as any)

  }, [rankingDate, isUser])

  return (
    <View style={generalStyles.containerGeneral}>
      <Position ranking={isUser ? user.users.ranking! : user.users.countries!} user={user.user} changeIcon={changeIcon} isUser={isUser} />
      <RankingTags changeRanking={changeRanking} rankingText={rankingText} />
      {
        isUser ?
          <UsersRanking user={user} navigation={navigation} />
          : <CountryRanking countries={user.users.countries!} userLoggedIn={user.user.user!} />
      }
      <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
    </View>
  )
}

export default Ranking