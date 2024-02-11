import { View } from 'react-native'

import { MenuPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

import { profileAction, usersRankingAction } from '../../server/actions/user.actions'

const Menu = ({ navigation, dispatch, user, isConnection, setIsChangeView, isChangeView }: MenuPropsType) => {

    const play = () => {
        setIsChangeView(!isChangeView)

        navigation.navigate('Play')
    }

    const statistics = () => {
        setIsChangeView(!isChangeView)

        dispatch(profileAction({
            id: user.user.user?._id!,
            token: user.user.token!,
            navigation
        }) as any)
    }

    const ranking = () => {
        setIsChangeView(!isChangeView)

        dispatch(usersRankingAction({
            date: 'total',
            token: user.user.token!,
            navigation,
            isNavigate: true
        }) as any)
    }

    const settings = () => {
        setIsChangeView(!isChangeView)

        navigation.navigate('Settings')
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='JUGAR' func={play} isConnection={true} />
            <ButtonMenu text='ESTADÍSTICAS' func={statistics} isConnection={isConnection} />
            <ButtonMenu text='CLASIFICACIÓN' func={ranking} isConnection={isConnection} />
            <ButtonMenu text='AJUSTES' func={settings} isConnection={isConnection} />
        </View>
    )
}

export default Menu