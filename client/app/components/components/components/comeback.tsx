import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { generalStyles } from '../../../styles/general.styles';

const Comeback = ({ func }: { func: () => void }) => {
    return (
        <View style={generalStyles.containComeback}>
            <TouchableOpacity style={generalStyles.buttonComeback} onPress={func}>
                <Icon name='arrow-left-thick' color='#FF8C00' size={Dimensions.get("window").height / 37} />
                <Text style={generalStyles.textComeback}>Come back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Comeback