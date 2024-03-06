import { Dimensions, StyleSheet } from 'react-native'

export const playingStyles = StyleSheet.create({

    containerQuestion: {
        height: '50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderWidth: 3,
        borderColor: '#ffffff',
        padding: Dimensions.get("window").height / 106,
        backgroundColor: '#FF8C00',
        borderStyle: 'solid',
        borderRadius: 8
    },

    containerStatisticsGame: {
        height: '8%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },

    containerOptions: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1
    },

    textStatisticGame: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerAnswer: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ffffff',
        padding: Dimensions.get("window").height / 74
    },

    textAnswer: {
        fontSize: Dimensions.get("window").height / 46,
        textAlign: 'center'
    },

    containerResponseAnswer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    containerPreFinish: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 140, 0, 0.5)',
    },

    containPreFinish: {
        width: '66.66%',
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#FF8C00',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    },

    textPreFinish: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600',
        color: '#FF8C00',
        textAlign: 'center',
        marginTop: Dimensions.get("window").height / 92
    },

    containFinish: {
        width: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#FF8C00',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    },

    buttonFinish: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '100%',
        marginTop: Dimensions.get("window").height / 92,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonFinish: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    containerStatisticsFinish: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },

    containerActionsFinish: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    containerSectionOptions: {
        width: '50%',
        height: '100%',
        padding: Dimensions.get("window").height / 106
    },

    containerOption: {
        padding: Dimensions.get("window").height / 106,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: Dimensions.get("window").height / 61.66,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textOption: {
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerImageQuestion: {
        height: '67%',
        width: '100%'
    },

    imageQuestion: {
        width: '100%',
        height: '100%'
    },

    containerMainQuestion: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    textQuestion: {
        fontSize: Dimensions.get("window").height / 38,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '500'
    },

    containerHelpsAdd: {
        width: '35%',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 106,
        marginTop: Dimensions.get("window").height / 92
    },

    containHelpText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

})