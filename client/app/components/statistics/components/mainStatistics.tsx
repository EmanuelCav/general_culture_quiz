import { View } from 'react-native'

import { homeStyles } from '../../../styles/home.styles'

import StatisticData from './statistic/statisticData'

import { MainStatisticsPropsType } from '../../../types/props.types'

import { amountCorrects, amountQuestions } from '../../../helper/statistic'

const MainStatistics = ({ games, user }: MainStatisticsPropsType) => {
    return (
        <View style={homeStyles.containMainStatistics}>
            <StatisticData text='Partidas Jugadas:' data={games.length} />
            <StatisticData text='Puntos:' data={`${user.points?.total!}xp`} />
            <StatisticData text='Mejor puntuación:' data={`${user.points?.bestPuntuation}xp`} />
            <StatisticData text='Cantidad de preguntas:' data={amountQuestions(games)} />
            <StatisticData text='Respuestas correctas:' data={`${amountCorrects(games)} (${games.length > 0 ? ((100 * amountCorrects(games)) / amountQuestions(games)).toFixed(2) : (0)}%)`} />
        </View>
    )
}

export default MainStatistics