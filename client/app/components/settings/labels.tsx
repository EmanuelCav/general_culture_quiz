import { View } from 'react-native';

import { homeStyles } from '../../styles/home.styles';

import Label from './components/label';

import { LabelsPropsType } from '../../types/props.types';

const Labels = ({ user, changeCountry }: LabelsPropsType) => {
    return (
        <View style={homeStyles.containerLabels}>
            <Label label='Selecciona un país' func={changeCountry} text={user.user?.country?.name!} />
            <Label label='Selecciona un idioma' func={() => console.log("ddfs")} text='Próximamente' />
        </View>
    )
}

export default Labels