import { View, Text } from 'react-native'

import { playStyles } from '../../../../../styles/play.styles'

const PointsCountry = ({ points }: { points: number }) => {
    return (
        <View style={playStyles.containPoints}>
            <Text style={playStyles.textInfoPoints}>{points}xp</Text>
        </View>
    )
}

export default PointsCountry