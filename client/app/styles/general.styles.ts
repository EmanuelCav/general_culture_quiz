import { Dimensions, StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({

    containerGeneral: {
        height: '100%'
    },

    containerBanner: {
        height: '20%',
        backgroundColor: '#ff0000'
    },

    buttonAccept: {
        padding: Dimensions.get("window").height / 62,
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8
    },

    buttonMenu: {
        padding: Dimensions.get("window").height / 62,
        width: '66%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 42
    },

    containerButtonAccept: {
        padding: Dimensions.get("window").height / 46,
        height: '15%',
        width: '100%',
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerLoading: {
        position: 'absolute',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: '#ffffff'
    }

})