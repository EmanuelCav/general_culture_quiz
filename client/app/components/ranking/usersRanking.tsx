import { View } from 'react-native'

import { IUser, IUserReducer } from '../../interface/User'

import UserRank from './components/usersRanking/userRank'

import { playStyles } from '../../styles/play.styles'

const UsersRanking = ({ user }: { user: IUserReducer }) => {

  return (
    <View style={playStyles.containerUsersRanking}>
        {
            user.users.ranking?.map((user: IUser, index: number) => {
                return <UserRank user={user} index={index} key={user._id} />
            })
        }
    </View>
  )
}

export default UsersRanking