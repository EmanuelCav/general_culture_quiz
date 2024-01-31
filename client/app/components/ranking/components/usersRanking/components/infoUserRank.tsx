import { View, Text, Image, Dimensions } from 'react-native'

import { IUser } from '../../../../../interface/User'

import { playStyles } from '../../../../../styles/play.styles'

const InfoUserRank = ({ user, index }: { user: IUser, index: number }) => {
    return (
        <View style={playStyles.conntainInfoUserRank}>
            <Text style={playStyles.textInfoPoints}>{index + 1}</Text>
            <Image source={{ uri: user.country?.flag }} alt='flag' style={{ width: Dimensions.get("window").width / 18, height: Dimensions.get("window").height / 37 }} />
            <Text style={playStyles.nicknameRank}>{user.nickname}</Text>
        </View>
    )
}

export default InfoUserRank