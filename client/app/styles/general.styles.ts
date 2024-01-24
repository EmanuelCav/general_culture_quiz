import { Dimensions, StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({

    containerBanner: {
        height: '20%',
        backgroundColor: '#ff0000'
    },

    buttonMenu: {
        padding: 12,
        width: '66%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 42
    }

})