import { View, Text, Image, Dimensions } from 'react-native'

import { CountryInfoPropsType } from '../../../../../types/props.types'

import { playStyles } from '../../../../../styles/play.styles'

const CountryInfo = ({ country, index }: CountryInfoPropsType) => {
  return (
    <View style={playStyles.conntainInfoUserRank}>
      <Text style={playStyles.textInfoPoints}>{index + 1}</Text>
      <Image source={{ uri: country.flag }} alt='flag' style={{
        width: Dimensions.get("window").width / 8, height: Dimensions.get("window").height / 25,
        marginLeft: Dimensions.get("window").width / 36
      }} resizeMode='contain' />
      <Text style={[playStyles.nicknameRank, { marginLeft: Dimensions.get("window").width / 36 }]}>{country._id}</Text>
    </View>
  )
}

export default CountryInfo