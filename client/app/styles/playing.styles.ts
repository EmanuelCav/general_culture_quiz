import { Dimensions, StyleSheet } from 'react-native'

export const playingStyles = StyleSheet.create({
    
    containerQuestion: {
        height: '50%'
    },

    containerStatisticsGame: {
        height: '8%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    
    containerOptions: {
        flex: 1
    },

    textStatisticGame: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    }

})