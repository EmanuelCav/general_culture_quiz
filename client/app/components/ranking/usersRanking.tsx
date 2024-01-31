import { View } from 'react-native'

import { IUser } from '../../interface/User'

import UserRank from './components/usersRanking/userRank'

import { playStyles } from '../../styles/play.styles'

import { UsersRankingPropsType } from '../../types/props.types'

const UsersRanking = ({ user, navigation }: UsersRankingPropsType) => {

  return (
    <View style={playStyles.containerUsersRanking}>
        {
            user.users.ranking?.map((u: IUser, index: number) => {
                return <UserRank user={u} index={index} navigation={navigation} token={user.user.token!} key={u._id} />
            })
        }
    </View>
  )
}

export default UsersRanking