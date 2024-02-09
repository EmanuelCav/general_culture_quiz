import { Pressable, Text, View } from 'react-native'

import { homeStyles } from '../../../../styles/home.styles'

import { ChangeUserPropsType } from '../../../../types/props.types'

const ChangeUser = ({ text, changeAuth, value }: ChangeUserPropsType) => {

    return (
        <View style={homeStyles.containerUserSettings}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : '#ffffff'
                }, homeStyles.label]} onPress={() => changeAuth(value)}>
                <Text style={homeStyles.textLabel}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default ChangeUser