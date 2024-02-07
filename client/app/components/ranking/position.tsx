import { Dimensions, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { playStyles } from '../../styles/play.styles'

import { PositionPropsType } from '../../types/props.types'

import { rankingUser } from '../../helper/statistic'

const Position = ({ ranking, user }: PositionPropsType) => {
  return (
    <View style={playStyles.containerPosition}>
      <Icon name='flag' color={"#FF8C00"} size={Dimensions.get("window").height / 37} />
      <Text style={playStyles.positionText}>{rankingUser(ranking, user)}</Text>
    </View>
  )
}

export default Position