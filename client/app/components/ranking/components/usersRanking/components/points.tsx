import { View, Text } from 'react-native'

import { IPoints } from '../../../../../interface/User'
import { playStyles } from '../../../../../styles/play.styles'

const Points = ({ points }: { points: IPoints | undefined }) => {
    return (
        <View style={playStyles.containPoints}>
            <Text style={playStyles.textInfoPoints}>{points?.total}xp</Text>
        </View>
    )
}

export default Points