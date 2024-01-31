import { View } from 'react-native'

import { MenuPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

import { usersRankingAction } from '../../server/actions/user.actions'

const Menu = ({ navigation, dispatch, user }: MenuPropsType) => {

    const play = () => {
        navigation.navigate('Play')
    }

    const statistics = () => {
        navigation.navigate('Statistics')
    }

    const ranking = () => {
        dispatch(usersRankingAction({
            token: user.user.token!,
            navigation
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