import { View, ScrollView, Text } from 'react-native'

import { playStyles } from '../../styles/play.styles'
import { ICountryRank } from '../../interface/User'

import CountryRank from './components/countryRanking/countryRank'

import { CountryRankingPropsType } from '../../types/props.types'

const CountryRanking = ({ countries, userLoggedIn }: CountryRankingPropsType) => {

    return (
        <View style={playStyles.containerUsersRanking}>
            {
                countries.length! > 0 ? (
                    <ScrollView style={{ width: '100%' }}>
                        {
                            countries.map((country: ICountryRank, index: number) => {
                                return <CountryRank country={country} userLoggedIn={userLoggedIn} index={index} key={country._id} />
                            })
                        }
                    </ScrollView>
                ) : (
                    <Text style={playStyles.positionText}>No hay países en la clasificación</Text>
                )
            }
        </View>
    )
}

export default CountryRanking