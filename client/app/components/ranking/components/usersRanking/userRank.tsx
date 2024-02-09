import { Pressable } from 'react-native'
import { useDispatch } from 'react-redux';

import { UserRankPropsType } from '../../../../types/props.types';

import InfoUserRank from './components/infoUserRank'
import Points from './components/points'

import { playStyles } from '../../../../styles/play.styles'

import { profileAction } from '../../../../server/actions/user.actions';

const UserRank = ({ user, index, navigation, token, userLoggedIn }: UserRankPropsType) => {

    const dispatch = useDispatch()

    const getData = async () => {
        dispatch(profileAction({
            token,
            id: user._id!,
            navigation
        }) as any)
    }

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : `${userLoggedIn._id === user._id ? '#ffa420' : '#FF8C00'}`
            },
            playStyles.containUserRank
        ]} onPress={getData}>
            <InfoUserRank user={user} index={index} />
            <Points points={user.points!} />
        </Pressable>
    )
}

export default UserRank