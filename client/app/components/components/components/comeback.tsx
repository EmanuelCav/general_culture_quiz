import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { generalStyles } from '../../../styles/general.styles';

import { ComebackPropsType } from '../../../types/props.types';

const Comeback = ({ func, language }: ComebackPropsType) => {
    return (
        <View style={generalStyles.containComeback}>
            <TouchableOpacity style={generalStyles.buttonComeback} onPress={func}>
                <Icon name='arrow-left-thick' color='#FF8C00' size={Dimensions.get("window").height / 37} />
                <Text style={generalStyles.textComeback}>
                    {language === 'English' ? 'Come back' : language === 'Español' ? 'Regresar' : 'Voltar'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Comeback