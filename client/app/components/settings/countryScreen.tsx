import { ScrollView, View } from 'react-native'

import { homeStyles } from '../../styles/home.styles'

import { ICountry } from '../../interface/User'
import { CountryScreenPropsType } from '../../types/props.types'

import ViewCountry from './components/countryScreen/viewCountry'
import ButtonAccept from '../components/buttonAccept'

const CountryScreen = ({ countries, changeCountry, user, updateCountry }: CountryScreenPropsType) => {
    return (
        <View style={homeStyles.containerAuth}>
            <View style={homeStyles.containCountryScreen}>
                <ScrollView>
                    {
                        countries.map((country: ICountry) => {
                            return <ViewCountry country={country} user={user} updateCountry={updateCountry} key={country._id} />
                        })
                    }
                </ScrollView>
                <ButtonAccept text='SELECCIONAR' func={changeCountry} isCategory={false} />
            </View>
        </View>
    )
}

export default CountryScreen