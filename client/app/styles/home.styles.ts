import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

    containerMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffff00'
    },

    containerUser: {
        height: '25%',
        backgroundColor: '#0000ff'
    },

    containerLabels: {
        height: '25%',
        backgroundColor: '#f00',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },

    containerLabel: {
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    containerUserSettings: {
        flex: 1,
        backgroundColor: '#ff0',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
    },

    containUserSettings: {
        flex: 1,
        width: '100%',
        backgroundColor: '#00ff00'
    }

})