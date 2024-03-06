import { Dimensions, StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({

    containerGeneral: {
        height: '100%'
    },

    containerBanner: {
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonAccept: {
        padding: Dimensions.get("window").height / 62,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    buttonMenu: {
        padding: Dimensions.get("window").height / 62,
        width: '66%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    buttonNotSelected: {
        padding: Dimensions.get("window").height / 62,
        width: '66%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8,
        borderColor: '#FF8C00',
        borderWidth: 2,
        borderStyle: 'solid',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 42,
        color: '#ffffff',
        fontWeight: '500',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonNotSelected: {
        fontSize: Dimensions.get("window").height / 42,
        color: '#FF8C00',
        fontWeight: '500'
    },

    containerButtonAccept: {
        padding: Dimensions.get("window").height / 46,
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    contaierMainLoading: {
        backgroundColor: '#FF8C00',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        top: 0,
        left: 0,
        position: 'absolute',
        zIndex: 44
    },

    containerLoading: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})