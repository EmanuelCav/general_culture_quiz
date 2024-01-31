import { View } from 'react-native'

import { homeStyles } from '../../../styles/home.styles'

import StatisticData from './statistic/statisticData'

import { IGame } from '../../../interface/Game'

import { amountCorrects, amountQuestions } from '../../../helper/statistic'

const MainStatistics = ({ games }: { games: IGame[] }) => {
    return (
        <View style={homeStyles.containMainStatistics}>
            <StatisticData text='Partidas Jugadas:' data={games.length} />
            <StatisticData text='Cantidad de preguntas:' data={amountQuestions(games)} />
            <StatisticData text='Respuestas correctas:' data={`${amountCorrects(games)} (${games.length > 0 ? ((100 * amountCorrects(games)) / amountQuestions(games)) : (0)}%)`} />
            <StatisticData text='Categoria favotira:' data={'Geografia'} />
        </View>
    )
}

export default MainStatistics