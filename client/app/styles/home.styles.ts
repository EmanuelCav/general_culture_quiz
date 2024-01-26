import { Dimensions, StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

    containerMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffff00'
    },

    containerUser: {
        height: '25%',
        backgroundColor: '#0000ff'
    },

    containerLabels: {
        height: '25%',
        backgroundColor: '#f00',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },

    containerLabel: {
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    containerUserSettings: {
        flex: 1,
        backgroundColor: '#ff0',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
    },

    containUserSettings: {
        flex: 1,
        width: '100%',
        backgroundColor: '#00ff00'
    },

    containerUserStatistics: {
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '25%',
        backgroundColor: 'blue',
        paddingHorizontal: Dimensions.get("window").height / 106
    },

    containerCategoryStatistics: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: Dimensions.get("window").height / 106
    },

    containerProfile: {
        backgroundColor: '#ff00ff',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    nickname: {
        fontSize: Dimensions.get("window").height / 37,
        fontWeight: '500',
        color: '#ffffff'
    },

    experience: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff'
    },

    containMainStatistics: {
        width: '100%'
    },

    textMainStatistics: {
        fontSize: Dimensions.get("window").height / 47
    },

    textMainStatisticsColor: {
        color: '#ffffff',
        marginLeft: Dimensions.get("window").width / 72
    },

    containCategoryStatistic: {
        padding: Dimensions.get("window").height / 74,
        borderWidth: 1,
        borderColor: 'orange',
        borderStyle: 'solid'
    }

})