import { View } from 'react-native'

import { IStatistic, IUserInfo } from '../../interface/User'

import Statistic from './components/statistic'

import { playStyles } from '../../styles/play.styles'

const ShowCategories = ({ user }: { user: IUserInfo }) => {
  return (
    <View style={playStyles.containerShowCategories}>
        {
          user.user?.statistics!.map((statistic: IStatistic) => {
            return <Statistic statistic={statistic} key={statistic._id} /> 
          })
        }
    </View>
  )
}

export default ShowCategories