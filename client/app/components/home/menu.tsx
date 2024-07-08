import { View } from 'react-native'

import { MenuPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

const Menu = ({ navigation, dispatch, isConnection, setIsChangeView, isChangeView }: MenuPropsType) => {

    const generator = () => {
        navigation.navigate('Generator')
    }

    const configuration = () => {
        navigation.navigate('Configuration')
    }

    const history = () => {
        navigation.navigate('History')
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='NUEVO' func={generator} />
            <ButtonMenu text='HISTORIAL' func={history} />
            <ButtonMenu text='CONFIGURACIÓN' func={configuration} />
        </View>
    )
}

export default Menu