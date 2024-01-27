import { View, Text } from 'react-native'

import { IUser } from '../../../../interface/User'

import { homeStyles } from '../../../../styles/home.styles'

const UserInfo = ({ user }: { user: IUser }) => {
    return (
        <View style={homeStyles.containUser}>
            <Text style={homeStyles.nickname}>{user.nickname}</Text>
            <Text style={homeStyles.experience}>3000xp</Text>
        </View>
    )
}

export default UserInfo