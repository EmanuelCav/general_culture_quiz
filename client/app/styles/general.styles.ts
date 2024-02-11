import { Dimensions, StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({

    containerGeneral: {
        height: '100%'
    },

    containerBanner: {
        height: '15%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
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

    buttonNotSelected: {
        padding: Dimensions.get("window").height / 62,
        width: '66%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8,
        borderColor: '#FF8C00',
        borderWidth: 2,
        borderStyle: 'solid'
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 42,
        color: '#ffffff',
        fontWeight: '500'
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

    containerLoading: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: '#FF8C00',
        zIndex: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }

})