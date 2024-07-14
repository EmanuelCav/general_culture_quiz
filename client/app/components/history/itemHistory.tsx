import { Pressable, Text } from "react-native"

import TeamsHistory from "./components/teamsHistory";

import { getDashboardAction } from "../../server/actions/dashboard.actions";

import { ItemHistoryPropsType } from "../../types/props.types";

import { historyStyles } from "../../styles/history.styles";

const ItemHistory = ({ item, dispatch, navigation, dashboards, user }: ItemHistoryPropsType) => {

    const getAnnotator = () => {
        dispatch(getDashboardAction({
            navigation,
            id: item.id!,
            dashboards
        }))
    }

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? user.palletteBackground?.slice(0, user.palletteBackground.length - 1) + '5' : user.palletteBackground,
                borderColor: user.palletteText,
                shadowColor: user.palletteText
            },
            historyStyles.containerHistory
        ]} onPress={getAnnotator}>
            <Text style={[historyStyles.nameHistory, { color: user.palletteText }]}>{item.name}</Text>
            <TeamsHistory teams={item.teams!} user={user} />
        </Pressable>
    )
}

export default ItemHistory