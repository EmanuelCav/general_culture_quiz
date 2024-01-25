import { Pressable, View, Text } from 'react-native'

import { ButtonMenuPropsType } from '../../types/props.types'

import { generalStyles } from '../../styles/general.styles'

const ButtonAccept = ({ func, text }: ButtonMenuPropsType) => {
    return (
        <View style={generalStyles.containerButtonAccept}>
            <Pressable style={generalStyles.buttonAccept} onPress={func}>
                <Text style={generalStyles.buttonMenuText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonAccept