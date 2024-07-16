import { Dimensions, Pressable, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createDashboardAction } from "../../server/actions/dashboard.actions";

import { ItemPropsType } from "../../types/props.types";

import { generateStyles } from "../../styles/generate.styles";

const Item = ({ item, dispatch, navigation, user, dashboards }: ItemPropsType) => {

    const generateAnnotator = () => {
        dispatch(createDashboardAction({
            navigation,
            user,
            category: item.name,
            dashboards
        }))
    }

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            generateStyles.containerGenerate
        ]} onPress={generateAnnotator}>
            <Icon name={item.icon} color={'#ffffff'} size={Dimensions.get("window").height / 37} />
            <Text style={generateStyles.textGenerate} numberOfLines={1}>{item.text}</Text>
        </Pressable>
    )
}

export default Item