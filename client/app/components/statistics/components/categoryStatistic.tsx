import { Text, View } from 'react-native'

import { IStatistic } from '../../../interface/User'

import { homeStyles } from '../../../styles/home.styles'

import StatisticData from './statistic/statisticData'

const CategoryStatistic = ({ statistic }: { statistic: IStatistic }) => {

    return (
        <View style={homeStyles.containCategoryStatistic}>
            <Text style={homeStyles.nickname}>{statistic.category.category}</Text>
            <StatisticData text='Cantidad de preguntas:' data={statistic.questions} />
            <StatisticData text='Respuestas correctas:' data={statistic.corrects} />
        </View>
    )
}

export default CategoryStatistic