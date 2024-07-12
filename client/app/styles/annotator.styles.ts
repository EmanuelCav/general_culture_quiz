import { Dimensions, StyleSheet } from 'react-native';

export const annotatorStyles = StyleSheet.create({

    containerScreenAnnotator: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderColor: '#ffffff',
        borderWidth: 4,
        borderStyle: 'solid',
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    nameAnnotator: {
        fontSize: Dimensions.get("window").height / 26.75,
        fontWeight: '700',
        marginVertical: Dimensions.get("window").height / 74
    },

    pointsAnnotator: {
        fontSize: Dimensions.get("window").height / 26.75,
        fontWeight: '600',
        marginVertical: Dimensions.get("window").height / 74
    },

    containerTime: {
        height: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textTime: {
        color: '#FF8C00',
        fontSize: Dimensions.get("window").height / 37,
        fontWeight: '600'
    },

    buttonAgainTime: {
        padding: Dimensions.get("window").height / 167,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Dimensions.get("window").width / 66,
        borderRadius: 8
    },

    containerActionsTime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get("window").height / 148
    }

})