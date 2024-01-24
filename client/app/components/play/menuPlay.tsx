import { View } from 'react-native'

import { StackNavigation } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

const MenuPlay = ({ navigation }: { navigation: StackNavigation }) => {

    const start = () => {
        navigation.navigate('Playing')
    }

    const categories = () => {
        navigation.navigate('Categories')
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