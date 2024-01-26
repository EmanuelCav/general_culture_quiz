import { View } from 'react-native'

import { homeStyles } from '../../../styles/home.styles'

import StatisticData from './statistic/statisticData'

const MainStatistics = () => {
    return (
        <View style={homeStyles.containMainStatistics}>
            <StatisticData text='Partidas Jugadas:' data={10} />
            <StatisticData text='Cantidad de preguntas:' data={1000} />
            <StatisticData text='Respuestas correctas:' data={900} />
            <StatisticData text='Categoria favotira:' data={'Geografia'} />
        </View>
    )
}

export default MainStatistics