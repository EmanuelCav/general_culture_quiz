import { Text } from 'react-native'

import { homeStyles } from '../../../../styles/home.styles'

import { StatisticDataPropsType } from '../../../../types/props.types'

const StatisticData = ({ text, data }: StatisticDataPropsType) => {
    return (
        <Text style={homeStyles.textMainStatistics}>{text}
            <Text style={homeStyles.textMainStatisticsColor}>{data}</Text>
        </Text>
    )
}

export default StatisticData