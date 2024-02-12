import { View } from 'react-native'

import { IStatistic } from '../../interface/User'

import Statistic from './components/statistic'

import { playStyles } from '../../styles/play.styles'

import { ShowCategoriesPropsType } from '../../types/props.types'

const ShowCategories = ({ user, dispatch }: ShowCategoriesPropsType) => {
  return (
    <View style={playStyles.containerShowCategories}>
        {
          user.user?.statistics!.map((statistic: IStatistic) => {
            return <Statistic statistic={statistic} dispatch={dispatch} token={user.token!} key={statistic._id} /> 
          })
          // .slice(0, 1)
        }
    </View>
  )
}

export default ShowCategories