import { ScrollView } from 'react-native'

import { IStatistic, IUser } from '../../interface/User'

import { homeStyles } from '../../styles/home.styles'

import CategoryStatistic from './components/categoryStatistic'

const CategoryStatistics = ({ user }: { user: IUser }) => {
    return (
        <ScrollView style={homeStyles.containerCategoryStatistics}>
            {
                user.statistics?.map((statistic: IStatistic) => {
                    return <CategoryStatistic statistic={statistic} key={statistic._id} />
                })
            }
        </ScrollView>
    )
}

export default CategoryStatistics