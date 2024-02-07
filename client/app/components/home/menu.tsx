import { View } from 'react-native'

import { MenuPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

import { profileAction, usersRankingAction } from '../../server/actions/user.actions'

const Menu = ({ navigation, dispatch, user }: MenuPropsType) => {

    const play = () => {
        navigation.navigate('Play')
    }

    const statistics = () => {
        dispatch(profileAction({
            id: user.user.user?._id!,
            token: user.user.token!,
            navigation
        }) as any)
    }

    const ranking = () => {
        dispatch(usersRankingAction({
            date: 'total',
            token: user.user.token!,
            navigation,
            isNavigate: true
        }) as any)
    }

    const settings = () => {
        navigation.navigate('Settings')
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='JUGAR' func={play} />
            <ButtonMenu text='ESTADÍSTICAS' func={statistics} />
            <ButtonMenu text='CLASIFICACIÓN' func={ranking} />
            <ButtonMenu text='AJUSTES' func={settings} />
        </View>
    )
}

export default Menu