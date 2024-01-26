import { View } from 'react-native'

import { IUser } from '../../../interface/User'

import Country from './profile/country'
import UserInfo from './profile/userInfo'

import { homeStyles } from '../../../styles/home.styles'

const Profile = ({ user }: { user: IUser }) => {
    return (
        <View style={homeStyles.containerProfile}>
            <UserInfo user={user} />
            <Country country={user.country!} />
        </View>
    )
}

export default Profile