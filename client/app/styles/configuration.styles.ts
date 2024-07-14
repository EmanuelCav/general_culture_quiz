import { Dimensions, StyleSheet } from 'react-native';

export const configurationStyles = StyleSheet.create({

    containerConfiguration: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textConfiguration: {
        fontSize: Dimensions.get("window").height / 37,
        color: '#FF8C00',
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: Dimensions.get("window").height / 74
    },

    containConfig: {
        width: '100%',
        padding: Dimensions.get("window").height / 106,
        borderRadius: 8,
        backgroundColor: '#FF8C00',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderStyle: 'solid',
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },

    containerSectionConfig: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },

    buttonConfig: {
        padding: Dimensions.get("window").height / 106,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },

    textConfig: {
        color: '#ffffff',
        fontSize: Dimensions.get("window").height / 47,
        fontWeight: '600'
    },

    textLanguage: {
        color: '#ffffff',
        fontSize: Dimensions.get("window").height / 43,
        fontWeight: '600'
    },

    pallete: {
        width: Dimensions.get("window").width / 9,
        height: Dimensions.get("window").height / 24.67,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderStyle: 'solid'
    },

    backgroundListConfig: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        width: '100%',
        height: '100%',
        left: 0,
        zIndex: 20,
        backgroundColor: 'rgba(255, 140, 0, .7)'
    },

    containerListConfig: {
        padding: Dimensions.get("window").height / 106,
        width: Dimensions.get("window").width / 1.4,
        backgroundColor: '#eeeeee'
    },

    colorSelected: {
        width: '100%',
        padding: Dimensions.get("window").height / 106,
        marginTop: Dimensions.get("window").height / 74,
        height: Dimensions.get("window").height / 24.67
    },

    buttonAccept: {
        padding: Dimensions.get("window").height / 106,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get("window").height / 74,
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

    textAccept: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: Dimensions.get("window").height / 41
    }

})