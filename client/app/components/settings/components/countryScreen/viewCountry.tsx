import { Dimensions, Image, Pressable, Text } from 'react-native';

import { playStyles } from '../../../../styles/play.styles';
import { homeStyles } from '../../../../styles/home.styles';

import { ViewCountryPropsType } from '../../../../types/props.types';

const ViewCountry = ({ country, user, updateCountry }: ViewCountryPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : `${user.user?.country?.name === country.name ? '#ffa420' : '#FF8C00'}`,
            },
            homeStyles.containerCountry
        ]} onPress={() => updateCountry(country._id)}>
            <Image source={{ uri: country.flag }} alt='flag' style={{
                width: Dimensions.get("window").width / 8,
                height: Dimensions.get("window").height / 25,
                marginLeft: Dimensions.get("window").width / 36
            }} resizeMode='contain' />
            <Text style={[playStyles.nicknameRank, { marginLeft: Dimensions.get("window").width / 36 }]}>{country.name}</Text>
        </Pressable>
    )
}

export default ViewCountry