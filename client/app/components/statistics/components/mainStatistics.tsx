import { View } from 'react-native'

import { homeStyles } from '../../../styles/home.styles'

import StatisticData from './statistic/statisticData'

import { MainStatisticsPropsType } from '../../../types/props.types'

import { amountCorrects, amountQuestions } from '../../../helper/statistic'

const MainStatistics = ({ games, user }: MainStatisticsPropsType) => {
    return (
        <View style={homeStyles.containMainStatistics}>
            <StatisticData text='Partidas Jugadas: ' data={games.length} />
            <StatisticData text='Mejor puntuación: ' data={`${user.points?.bestPuntuation}xp`} />
            <StatisticData text='Cantidad de preguntas: ' data={amountQuestions(user.statistics!)} />
            <StatisticData text='Respuestas correctas: ' data={`${amountCorrects(user.statistics!)} (${games.length > 0 ? ((100 * amountCorrects(user.statistics!)) / amountQuestions(user.statistics!)).toFixed(2) : (0)}%)`} />
        </View>
    )
}

export default MainStatistics