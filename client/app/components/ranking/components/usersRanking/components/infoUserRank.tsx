import { View, Text, Image, Dimensions } from 'react-native'

import { playStyles } from '../../../../../styles/play.styles'

import { InfoUserRankPropsType } from '../../../../../types/props.types'

const InfoUserRank = ({ user, index }: InfoUserRankPropsType) => {
    return (
        <View style={playStyles.conntainInfoUserRank}>
            <Text style={playStyles.textInfoPoints}>{index + 1}</Text>
            <Image source={{ uri: user.country?.flag }} alt='flag' style={{ width: Dimensions.get("window").width / 8, height: Dimensions.get("window").height / 25, 
            marginLeft: Dimensions.get("window").width / 36 }} resizeMode='contain' />
            <Text style={[playStyles.nicknameRank, { marginLeft: Dimensions.get("window").width / 36 }]}>{user.nickname}</Text>
        </View>
    )
}

export default InfoUserRank