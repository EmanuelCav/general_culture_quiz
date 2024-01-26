import { Dimensions, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { IStatistic } from '../../../interface/User'

import { playStyles } from '../../../styles/play.styles'

const Statistic = ({ statistic }: { statistic: IStatistic }) => {
  return (
    <View style={[playStyles.containStatistic, {
      backgroundColor: statistic.category.colorActive
    }]}>
      <Icon name={statistic.category.icon} color={'#ffffff'} size={Dimensions.get("window").height / 28} />
      <Text style={playStyles.textCategoryIcon}>{statistic.category.category}</Text>
    </View>
  )
}

export default Statistic