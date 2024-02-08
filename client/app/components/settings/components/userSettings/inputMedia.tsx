import { Text, View } from 'react-native'

import { homeStyles } from '../../../../styles/home.styles'

import ActionsMedia from './actionsMedia'

import { InputMediaPropsType } from '../../../../types/props.types'

const InputMedia = ({ text, func, user, isSound }: InputMediaPropsType) => {
    return (
        <View style={homeStyles.containerInputMedia}>
            <Text style={homeStyles.titleLabel}>{text}</Text>
            <ActionsMedia func={func} user={user} isSound={isSound} />
        </View>
    )
}

export default InputMedia