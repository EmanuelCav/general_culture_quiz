import { Dimensions, StyleSheet } from 'react-native';

export const historyStyles = StyleSheet.create({

    containerHistory: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: Dimensions.get("window").height / 66,
        paddingVertical: Dimensions.get("window").height / 74,
        borderWidth: 2,
        borderStyle: 'solid',
        marginTop: Dimensions.get("window").height / 55,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    nameHistory: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600'
    },

    teamsHistory: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: Dimensions.get("window").height / 74,
        width: '100%'
    },

    containerTeamHistory: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    nameTeamHistory: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '500'
    },

    pointsTeamHistory: {
        fontSize: Dimensions.get("window").height / 43,
        fontWeight: '500'
    },

    textHistory: {
        fontSize: Dimensions.get("window").height / 43,
        color: '#FF8C00',
        textAlign: 'center',
        fontWeight: '600'
    }

})