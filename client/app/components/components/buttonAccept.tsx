import { Pressable, View, Text } from 'react-native'

import { ButtonAcceptPropsType } from '../../types/props.types'

import { generalStyles } from '../../styles/general.styles'

const ButtonAccept = ({ func, text, isCategory }: ButtonAcceptPropsType) => {
    return (
        <View style={generalStyles.containerButtonAccept}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : '#FF8C00',
                    opacity: isCategory ? 0.5 : 1
                },
                generalStyles.buttonAccept
            ]} onPress={func} disabled={isCategory}>
                <Text style={generalStyles.buttonMenuText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonAccept