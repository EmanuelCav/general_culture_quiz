import { View } from 'react-native'

import { MenuPlayPropsType } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

import { gameAction } from '../../server/actions/game.actions'

const MenuPlay = ({ navigation, user, dispatch, isConnection, setIsChangeView, isChangeView }: MenuPlayPropsType) => {

    const start = () => {
        setIsChangeView(!isChangeView)

        if (isConnection) {
            if (user.user?.statistics?.filter(statistic => statistic.isSelect).length === 0) {
                navigation.navigate('Categories', {
                    isPlay: true
                })

                return
            }
        }

        dispatch(gameAction({
            navigation,
            token: "",
            isConnection
        }) as any)
    }

    const categories = () => {
        setIsChangeView(!isChangeView)

        navigation.navigate('Categories', {
            isPlay: false
        })
    }

    const options = () => {
        setIsChangeView(!isChangeView)

        navigation.navigate('Options')
    }

    const goBack = () => {
        setIsChangeView(!isChangeView)

        navigation.goBack()
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='COMENZAR' func={start} isConnection={true} />
            <ButtonMenu text='CATEGORÍAS' func={categories} isConnection={isConnection} />
            <ButtonMenu text='OPCIONES' func={options} isConnection={isConnection} />
            <ButtonMenu text='REGRESAR' func={goBack} isConnection={true} />
        </View>
    )
}

export default MenuPlay