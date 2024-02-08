import { Pressable, Text, View } from 'react-native'

import { homeStyles } from '../../../../styles/home.styles'

import { ActionsMediaPropsType } from '../../../../types/props.types'

const ActionsMedia = ({ func, user, isSound }: ActionsMediaPropsType) => {
    return (
        <View style={homeStyles.containerActionsMedia}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : `${isSound ? (user.user?.isSounds ? "#FF8C00" : '#ffffff')
                        : (user.user?.isImage ? "#FF8C00" : '#ffffff')}`
                }, homeStyles.buttonActionMedia
            ]} onPress={func} disabled={isSound ? user.user?.isSounds : user.user?.isImage}>
                <Text style={[homeStyles.textButtonMedia, {
                    color: `${isSound ? (user.user?.isSounds ? "#ffffff" : "#FF8C00")
                        : (user.user?.isImage ? "#ffffff" : "#FF8C00")}`
                }]}>SI</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ffa420' : `${isSound ? (!user.user?.isSounds ? "#FF8C00" : '#ffffff')
                        : (!user.user?.isImage ? "#FF8C00" : '#ffffff')}`
                }, homeStyles.buttonActionMedia
            ]} onPress={func} disabled={isSound ? !user.user?.isSounds : !user.user?.isImage}>
                <Text style={[homeStyles.textButtonMedia, {
                    color: `${isSound ? (!user.user?.isSounds ? "#ffffff" : "#FF8C00")
                        : (!user.user?.isImage ? "#ffffff" : "#FF8C00")}`
                }]}>NO</Text>
            </Pressable>
        </View>
    )
}

export default ActionsMedia