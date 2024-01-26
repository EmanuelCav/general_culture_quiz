import { View, Text, Image } from 'react-native'

import { ICountry } from '../../../../interface/User'

const Country = ({ country }: { country: ICountry }) => {
    return (
        <View>
            <Image source={{ uri: country?.flag }} />
            <Text>{country.name}</Text>
        </View>
    )
}

export default Country