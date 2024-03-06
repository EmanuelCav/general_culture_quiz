import { Dimensions, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { homeStyles } from '../../../styles/home.styles'

import { MainInfoUserPropsType } from '../../../types/props.types'

const MainInfoUser = ({ user, isGuest }: MainInfoUserPropsType) => {
    return (
        <View style={homeStyles.containUser}>
            <Text style={homeStyles.nickname}>{user?.nickname}</Text>
            {
                !isGuest &&
                <Text style={homeStyles.experience}>{user?.points?.total}xp</Text>
            }
            <View style={homeStyles.containerHelps}>
                <Text style={homeStyles.experience}>{user?.helps}</Text>
                <Icon name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} />
            </View>
        </View>
    )
}

export default MainInfoUser