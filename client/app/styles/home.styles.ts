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
        flexDirection: 'column',
        width: '100%'
    },

    containerLabel: {
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
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
    },

    containerAuth: {
        position: 'absolute',
        zIndex: 6,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
        width: '100%',
        padding: Dimensions.get("window").height / 74
    },

    containerTitleAuth: {
        width: '100%'
    },

    textTitleAuth: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#ffffff'
    },

    containerInput: {
        width: '100%'
    },

    buttonAuth: {
        padding: Dimensions.get("window").height / 62,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        marginTop: Dimensions.get("window").height / 61
    },

    textButtonAuth: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: Dimensions.get("window").height / 42,
    },

    labelInput: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#ffffff'
    },

    inputAuth: {
        padding: Dimensions.get("window").height / 106,
        borderRadius: 8,
        width: '100%',
        fontSize: Dimensions.get("window").height / 46,
        borderWidth: 1,
        borderColor: '#FF8C00',
        borderStyle: 'solid'
    },

    titleLabel: {
        color: '#ffffff',
        fontSize: Dimensions.get("window").height / 37,
        fontWeight: '500'
    },

    label: {
        borderWidth: 1,
        borderColor: '#FF8C00',
        borderStyle: 'solid',
        padding: Dimensions.get("window").height / 74,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textLabel: {
        color: '#FF8C00',
        fontSize: Dimensions.get("window").height / 41
    }


})