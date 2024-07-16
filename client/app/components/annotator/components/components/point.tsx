import { Text, View } from "react-native"

import { annotatorStyles } from "../../../../styles/annotator.styles"

import { PointPropsType } from "../../../../types/props.types"

const Point = ({ point, dashboard }: PointPropsType) => {
    return (
        <View style={annotatorStyles.containPoint}>
            <Text style={annotatorStyles.textPoint}>{dashboard.teams![point.team].name}</Text>
            <Text style={annotatorStyles.textPoint}>{point.point}</Text>
        </View>
    )
}

export default Point