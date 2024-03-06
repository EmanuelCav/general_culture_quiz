import { View } from 'react-native'

import MainInfoUser from './components/mainInfoUser'
import CountryUser from './components/countryUser'

import { homeStyles } from '../../styles/home.styles'

import { guest } from '../../helper/guest'

const Guest = () => {

    return (
        <View style={homeStyles.containerUser}>
            <MainInfoUser user={guest} isGuest={true} />
            <CountryUser country={guest?.country!} />
        </View>
    )
}

export default Guest