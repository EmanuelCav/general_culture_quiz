import { Dimensions, StyleSheet } from 'react-native';

export const playStyles = StyleSheet.create({

    containerAmountOptions: {
        backgroundColor: '#ff00ff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        padding: Dimensions.get("window").height / 46
    },
    
    containerAmountQuestion: {
        height: '30%',
        backgroundColor: '#ffff00',
        padding: Dimensions.get("window").height / 46,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },

    titleOption: {
        fontSize: Dimensions.get("window").height / 42,
        textAlign: 'center'
    },

    textAlertAmountQuestion: {
        fontSize: Dimensions.get("window").height / 37,
        fontWeight: '600'
    },

})