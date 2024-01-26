import { View } from 'react-native'

import { IUser } from '../../interface/User'

import Profile from './components/profile'
import MainStatistics from './components/mainStatistics'

import { homeStyles } from '../../styles/home.styles'

const UserStatistics = ({ user }: { user: IUser }) => {

    return (
        <View style={homeStyles.containerUserStatistics}>
            <Profile user={user} />
            <MainStatistics />
        </View>
    )
}

export default UserStatistics