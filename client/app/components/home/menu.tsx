import React from 'react'
import { View, Text, Pressable } from 'react-native'

import { StackNavigation } from '../../types/props.types'
import { homeStyles } from '../../styles/home.styles'
import { generalStyles } from '../../styles/general.styles'

const Menu = ({ navigation }: { navigation: StackNavigation }) => {

    const redirectPlay = () => {
        navigation.navigate('Play')
    }

    return (
        <View style={homeStyles.containerMenu}>
            <Pressable style={generalStyles.buttonMenu} onPress={redirectPlay}>
                <Text style={generalStyles.buttonMenuText}>Play</Text>
            </Pressable>
            <Pressable style={generalStyles.buttonMenu} onPress={redirectPlay}>
                <Text style={generalStyles.buttonMenuText}>Statistics</Text>
            </Pressable>
            <Pressable style={generalStyles.buttonMenu}>
                <Text style={generalStyles.buttonMenuText} onPress={redirectPlay}>Ranking</Text>
            </Pressable>
            <Pressable style={generalStyles.buttonMenu}>
                <Text style={generalStyles.buttonMenuText} onPress={redirectPlay}>Settings</Text>
            </Pressable>
        </View>
    )
}

export default Menu