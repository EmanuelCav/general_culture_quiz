import { View } from 'react-native'

import ButtonMenu from '../components/buttonMenu'

import { MenuPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import { dashboardsAction } from '../../server/actions/dashboard.actions'

const Menu = ({ navigation, dispatch, dashboards, user }: MenuPropsType) => {

    const generator = () => {
        navigation.navigate('Generate')
    }

    const configuration = () => {
        navigation.navigate('Configuration')
    }

    const history = () => {
        dispatch(dashboardsAction({
            navigation,
            dashboards
        }))
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text={user.language === 'English' ? 'NEW' : user.language === 'Español' ? 'NUEVO' : 'NOVO'} func={generator} icon="add" />
            <ButtonMenu text={user.language === 'English' ? 'HISTORY' : user.language === 'Español' ? 'HISTORIAL' : 'HISTÓRICO'} func={history} icon="history" />
            <ButtonMenu text={user.language === 'English' ? 'CONFIGURATION' : user.language === 'Español' ? 'CONFIGURACIÓN' : 'CONFIGURAÇÃO'} func={configuration} icon="settings" />
        </View>
    )
}

export default Menu