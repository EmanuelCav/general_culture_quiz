import { Pressable } from 'react-native'

import { IUser } from '../../../../interface/User'

import InfoUserRank from './components/infoUserRank'
import Points from './components/points'

import { playStyles } from '../../../../styles/play.styles'

const UserRank = ({ user, index }: { user: IUser, index: number }) => {
    return (
        <Pressable style={playStyles.containUserRank}>
            <InfoUserRank user={user} index={index}/>
            <Points points={user.points} />
        </Pressable>
    )
}

export default UserRank