import { Pressable, Text, View } from 'react-native'

import { generalStyles } from '../../../../styles/general.styles'
import { homeStyles } from '../../../../styles/home.styles'

const Register = () => {
    return (
        <View style={homeStyles.containerUserSettings}>
            <Pressable style={generalStyles.buttonMenu}>
                <Text style={generalStyles.buttonMenuText}>Registrar usuario</Text>
            </Pressable>
        </View>
    )
}

export default Register