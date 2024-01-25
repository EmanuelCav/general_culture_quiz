import { Pressable, Text, View } from 'react-native'

import { generalStyles } from '../../../../styles/general.styles'

import { homeStyles } from '../../../../styles/home.styles'

const ChangeUser = () => {
    return (
        <View style={homeStyles.containerUserSettings}>
            <Pressable style={generalStyles.buttonMenu}>
                <Text style={generalStyles.buttonMenuText}>Cambiar de usuario</Text>
            </Pressable>
        </View>
    )
}

export default ChangeUser