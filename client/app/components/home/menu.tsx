import { View } from 'react-native'

import { StackNavigation } from '../../types/props.types'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from '../components/buttonMenu'

const Menu = ({ navigation }: { navigation: StackNavigation }) => {

    const play = () => {
        navigation.navigate('Play')
    }

    const statistics = () => {
        navigation.navigate('Statistics')
    }

    const ranking = () => {
        navigation.navigate('Ranking')
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