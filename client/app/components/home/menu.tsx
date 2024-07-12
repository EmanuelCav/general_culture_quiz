import { View } from 'react-native'

import { MenuPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'
import { dashboardsAction } from '../../server/actions/dashboard.actions'

const Menu = ({ navigation, dispatch, user }: MenuPropsType) => {

    const generator = () => {
        navigation.navigate('Generate')
    }

    const configuration = () => {
        navigation.navigate('Configuration')
    }

    const history = () => {
        dispatch(dashboardsAction({
            navigation,
            user
        }))
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='NUEVO' func={generator} icon="add" />
            <ButtonMenu text='HISTORIAL' func={history} icon="history" />
            <ButtonMenu text='CONFIGURACIÓN' func={configuration} icon="settings" />
        </View>
    )
}

export default Menu