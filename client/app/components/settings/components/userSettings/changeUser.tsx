import { Pressable, Text, View } from 'react-native'

import { homeStyles } from '../../../../styles/home.styles'

import { ChangeUserPropsType } from '../../../../types/props.types'

const ChangeUser = ({ text, changeAuth }: ChangeUserPropsType) => {

    return (
        <View style={homeStyles.containerUserSettings}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#dddddd' : '#ffffff'
                }, homeStyles.label]} onPress={changeAuth}>
                <Text style={homeStyles.textLabel}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default ChangeUser