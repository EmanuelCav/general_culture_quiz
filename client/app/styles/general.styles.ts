import { Dimensions, StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({

    containerGeneral: {
        height: '100%'
    },

    containerBanner: {
        height: '15%'
    },

    buttonAccept: {
        padding: Dimensions.get("window").height / 62,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8
    },

    buttonMenu: {
        padding: Dimensions.get("window").height / 62,
        width: '66%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 42,
        color: '#ffffff',
        fontWeight: '500'
    },

    containerButtonAccept: {
        padding: Dimensions.get("window").height / 46,
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerLoading: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: '#ffffff'
    }

})