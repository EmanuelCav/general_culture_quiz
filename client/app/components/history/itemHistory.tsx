import { Pressable, Text } from "react-native"

import TeamsHistory from "./components/teamsHistory";

import { getDashboardAction } from "../../server/actions/dashboard.actions";

import { ItemHistoryPropsType } from "../../types/props.types";

import { historyStyles } from "../../styles/history.styles";

const ItemHistory = ({ item, dispatch, navigation }: ItemHistoryPropsType) => {

    const getAnnotator = () => {
        dispatch(getDashboardAction({
            navigation,
            id: item.id!
        }))
    }

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : '#FF8C00'
            },
            historyStyles.containerHistory
        ]} onPress={getAnnotator}>
            <Text style={historyStyles.nameHistory}>{item.name}</Text>
            <TeamsHistory teams={item.teams!} />
        </Pressable>
    )
}

export default ItemHistory