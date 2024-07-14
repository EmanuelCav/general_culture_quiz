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

    buttonMenu: {
        position: 'relative',
        padding: Dimensions.get("window").height / 62,
        width: '66%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        height: Dimensions.get("window").height / 14,
        borderRadius: 8,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    buttonMenuIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: Dimensions.get("window").height / 45,
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 42,
        color: '#ffffff',
        fontWeight: '500',
        marginLeft: Dimensions.get("window").width / 36
    },

    contaierMainLoading: {
        backgroundColor: '#6e6e6e',
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
    },

    containComeback: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    
    textComeback: {
        color: '#FF8C00',
        marginLeft: Dimensions.get("window").width / 63,
        fontSize: Dimensions.get("window").height / 43,
        fontWeight: '600'
    },
    
    buttonComeback: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerHeaderScreen: {
        width: '100%'
    },

    titleHeaderScreen: {
        fontSize: Dimensions.get("window").height / 37,
        color: '#FF8C00',
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: Dimensions.get("window").height / 74
    }

})