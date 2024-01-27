import { Dimensions, StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

    containerMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    containerUser: {
        width: '100%',
        height: '20%',
        paddingHorizontal: Dimensions.get("window").width / 72,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FF8C00',
        borderRadius: 8
    },

    containerLabels: {
        height: '25%',
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
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
    },

    containUserSettings: {
        flex: 1,
        width: '100%'
    },

    containerUserStatistics: {
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '25%',
        paddingHorizontal: Dimensions.get("window").height / 106
    },

    containerCategoryStatistics: {
        flex: 1,
        padding: Dimensions.get("window").height / 106
    },

    containerProfile: {
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
        fontSize: Dimensions.get("window").height / 47,
        color: '#FF8C00',
        fontWeight: '500'
    },

    textMainStatisticsColor: {
        color: '#ffffff',
        marginLeft: Dimensions.get("window").width / 72
    },

    containCategoryStatistic: {
        padding: Dimensions.get("window").height / 74,
        borderWidth: 1,
        borderColor: '#FF8C00',
        borderStyle: 'solid'
    },

    containUser: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        flexDirection: 'column'
    },

    country: {
        fontSize: Dimensions.get("window").height / 46,
        fontWeight: '500',
        color: '#ffffff'
    }

})