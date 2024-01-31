import { View } from 'react-native'
import { useSelector } from 'react-redux';

import { IReducer } from '../interface/General';
import { StackNavigation } from '../types/props.types';

import { selector } from '../helper/selector';

import { generalStyles } from '../styles/general.styles';

import ButtonAccept from '../components/components/buttonAccept';
import UsersRanking from '../components/ranking/usersRanking';
import RankingTags from '../components/ranking/rankingTags';
import Position from '../components/ranking/position';

const Ranking = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={generalStyles.containerGeneral}>
      <Position />
      <RankingTags />
      <UsersRanking user={user} />
      <ButtonAccept text='ACEPTAR' func={goBack} />
    </View>
  )
}

export default Ranking