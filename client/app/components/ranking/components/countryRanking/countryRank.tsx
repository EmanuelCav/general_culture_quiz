import { View } from 'react-native'

import CountryInfo from './components/countryInfo'
import PointsCountry from './components/pointsCountry'

import { playStyles } from '../../../../styles/play.styles'

import { CountryRankPropsType } from '../../../../types/props.types'

const CountryRank = ({ country, index, userLoggedIn }: CountryRankPropsType) => {
    return (
        <View style={[playStyles.containUserRank, {
            backgroundColor: userLoggedIn.country?.name === country._id ? '#ffa420' : '#FF8C00'
        }]}>
            <CountryInfo country={country} index={index} />
            <PointsCountry points={country.points} />
        </View>
    )
}

export default CountryRank