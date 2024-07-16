import { Text, View } from 'react-native'

import Comeback from './components/comeback';

import { HeaderScreenPropsType } from '../../types/props.types';

import { generalStyles } from '../../styles/general.styles';

const HeaderScreen = ({ func, text, language }: HeaderScreenPropsType) => {
    return (
        <View style={generalStyles.containerHeaderScreen}>
            <Comeback func={func} language={language} />
            <Text style={generalStyles.titleHeaderScreen}>{text}</Text>
        </View>
    )
}

export default HeaderScreen