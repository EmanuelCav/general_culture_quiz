import { Dimensions, StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

    containerMenuPlay: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },

    containerMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },

    containerTitle: {
        width: '100%',
        height: '20%',
        paddingHorizontal: Dimensions.get("window").width / 72,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row'
    },

    containerEventTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 37,
        width: '50%',
        height: '100%'
    },

    textTitle: {
        fontSize: Dimensions.get("window").height / 31,
        color: '#FF8C00',
        fontWeight: '500',
        textAlign: 'center'
    },

    imageTitle: {
        width: '100%',
        height: '100%'
    }
})