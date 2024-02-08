import { View } from 'react-native';

import { homeStyles } from '../../styles/home.styles';

import Label from './components/label';

import { IUserInfo } from '../../interface/User';

const Labels = ({ user }: { user: IUserInfo }) => {
    return (
        <View style={homeStyles.containerLabels}>
            <Label text='Selecciona un país' />
            <Label text='Selecciona un idioma' />
        </View>
    )
}

export default Labels