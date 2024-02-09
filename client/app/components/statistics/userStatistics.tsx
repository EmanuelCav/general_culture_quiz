import { View } from 'react-native'

import { UserStatisticsPropsType } from '../../types/props.types'

import Profile from './components/profile'
import MainStatistics from './components/mainStatistics'

import { homeStyles } from '../../styles/home.styles'

const UserStatistics = ({ user, games }: UserStatisticsPropsType) => {

    return (
        <View style={homeStyles.containerUserStatistics}>
            <Profile user={user} />
            <MainStatistics games={games} user={user} />
        </View>
    )
}

export default UserStatistics