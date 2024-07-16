import { Text, View } from "react-native"

import { IPoint } from "../../../../interface/Dashboard"

import { annotatorStyles } from "../../../../styles/annotator.styles"

const Point = ({ point }: { point: IPoint }) => {
    return (
        <View style={annotatorStyles.containPoint}>
            <Text style={annotatorStyles.textPoint}>{point.team}</Text>
            <Text style={annotatorStyles.textPoint}>{point.point}</Text>
        </View>
    )
}

export default Point