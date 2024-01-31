import { Dimensions, Image, Text, View } from 'react-native'

import { ICountry } from '../../../interface/User'

import { homeStyles } from '../../../styles/home.styles'

const CountryUser = ({ country }: { country: ICountry }) => {
    return (
        <View style={homeStyles.containUser}>
            <Image source={{ uri: country?.flag }} alt={country?.name} 
            style={{height: Dimensions.get("window").height / 25, width: Dimensions.get("window").width / 7 }} resizeMode='contain' />
            <Text style={homeStyles.country}>{country?.name}</Text>
        </View>
    )
}

export default CountryUser