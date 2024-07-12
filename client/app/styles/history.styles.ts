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
        borderColor: '#ffffff',
        borderWidth: 2,
        borderStyle: 'solid',
        marginTop: Dimensions.get("window").height / 55,
        shadowColor: "#ffffff",
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
        color: '#ffffff',
        fontWeight: '500'
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
        color: '#ffffff'
    },

    pointsTeamHistory: {
        fontSize: Dimensions.get("window").height / 43,
        color: '#ffffff'
    }

})