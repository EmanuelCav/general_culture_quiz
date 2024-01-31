import { Text, View } from 'react-native'

import { IUser } from '../../../interface/User'

import { homeStyles } from '../../../styles/home.styles'

const MainInfoUser = ({ user }: { user: IUser }) => {
    return (
        <View style={homeStyles.containUser}>
            <Text style={homeStyles.nickname}>{user?.nickname}</Text>
            <Text style={homeStyles.experience}>{user?.helps}</Text>
        </View>
    )
}

export default MainInfoUser