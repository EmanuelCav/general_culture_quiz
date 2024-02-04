import { Dimensions, Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { playStyles } from '../../../styles/play.styles'

import { categoryAction } from '../../../server/actions/user.actions';

import { StatisticPropsType } from '../../../types/props.types';

const Statistic = ({ statistic, token, dispatch }: StatisticPropsType) => {

  const changeCategory = () => {
    dispatch(categoryAction({
      id: statistic._id,
      token
    }) as any)
  }


  return (
    <Pressable style={({ pressed }) => [
      {
        opacity: pressed ? .3 : 1,
      },
      playStyles.containStatistic,
      {
        backgroundColor: statistic.isSelect ? statistic.category.colorActive : "#ffffff"
      }
    ]}
      onPress={changeCategory}>
      <Icon name={statistic.category.icon} color={statistic.isSelect ? '#ffffff' : '#dddddd'} size={Dimensions.get("window").height / 28} />
      <Text style={[playStyles.textCategoryIcon, statistic.isSelect ? { color: '#ffffff' } : { color: '#dddddd' }]}>{statistic.category.category}</Text>
    </Pressable>
  )
}

export default Statistic