import { View } from 'react-native'

import { MenuPlayPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

import { gameAction } from '../../server/actions/game.actions'

const MenuPlay = ({ navigation, user, dispatch }: MenuPlayPropsType) => {

    const start = () => {
        if (user.user?.statistics?.filter(statistic => statistic.isSelect).length === 0) {
            navigation.navigate('Categories', {
                isPlay: true
            })
            
            return
        }

        dispatch(gameAction({
            navigation,
            token: user.token!
        }) as any)
    }

    const categories = () => {
        navigation.navigate('Categories', {
            isPlay: false
        })
    }

    const options = () => {
        navigation.navigate('Options')
    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='COMENZAR' func={start} />
            <ButtonMenu text='CATEGORÍAS' func={categories} />
            <ButtonMenu text='OPCIONES' func={options} />
            <ButtonMenu text='REGRESAR' func={goBack} />
        </View>
    )
}

export default MenuPlay