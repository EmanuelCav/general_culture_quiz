import { View } from 'react-native'

import { homeStyles } from '../../styles/home.styles'

import CountryUser from './components/countryUser'
import MainInfoUser from './components/mainInfoUser'

import { IUser } from '../../interface/User'

const User = ({ user }: { user: IUser }) => {
    return (
        <View style={homeStyles.containerUser}>
            <MainInfoUser user={user} />
            <CountryUser country={user.country!} />
        </View>
    )
}

export default User