import { Dimensions, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { playStyles } from '../../styles/play.styles'

import { PositionPropsType } from '../../types/props.types'

import { rankingCountry, rankingUser } from '../../helper/statistic'

const Position = ({ ranking, user, changeIcon, isUser }: PositionPropsType) => {

  return (
    <View style={playStyles.containerPosition}>
      <Icon name={isUser ? 'flag' : 'user'} color={"#FF8C00"} size={Dimensions.get("window").height / 31} onPress={changeIcon} />
      {
        isUser ? 
        <Text style={playStyles.positionText}>{rankingUser(ranking, user)}</Text>
        : <Text style={playStyles.positionText}>{rankingCountry(ranking, user)}</Text>
      }
    </View>
  )
}

export default Position