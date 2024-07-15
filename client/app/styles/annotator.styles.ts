import { Dimensions, StyleSheet } from 'react-native';

export const annotatorStyles = StyleSheet.create({

    containerScreenAnnotator: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 4,
        borderStyle: 'solid',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
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
    },

    containerMarker: {
        position: 'absolute',
        width: Dimensions.get("window").width / 1.4,
        height: Dimensions.get("window").height / 10,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get("window").width / 120
    },

    markerButton: {
        padding: Dimensions.get("window").height / 167,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        flex: 1,
        marginHorizontal: Dimensions.get("window").width / 90
    },

    textMarkerButton: {
        fontSize: Dimensions.get("window").height / 47,
        fontWeight: '600'
    },

    containPointsAnnotator: {
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    screenAnnotator: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flex: 1
    },

    buttonActionMarker: {
        padding: Dimensions.get("window").height / 148,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        flex: 1
    },

    containerSettings: {
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

    containSettings: {
        width: Dimensions.get("window").width / 1.4,
        padding: Dimensions.get("window").height / 106,
        backgroundColor: '#ffffff'
    },

    buttonActionSettings: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: Dimensions.get("window").height / 106,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: Dimensions.get("window").height / 106
    },

    actionSettings: {
        fontSize: Dimensions.get("window").height / 44,
        fontWeight: '600',
        color: '#ffffff',
        marginLeft: Dimensions.get("window").width / 72
    },

    textComeBack: {
        fontSize: Dimensions.get("window").height / 33,
        color: '#FF8C00',
        fontWeight: '600',
        marginTop: Dimensions.get("window").height / 60,
        textAlign: 'center'
    },

    textSettings: {
        fontSize: Dimensions.get("window").height / 33,
        color: '#FF8C00',
        fontWeight: '600',
        marginBottom: Dimensions.get("window").height / 60,
        textAlign: 'center'
    },

    labelSettings: {
        fontSize: Dimensions.get("window").height / 43,
        fontWeight: '600',
        color: '#FF8C00'
    },

    containerInput: {
        marginVertical: Dimensions.get("window").height / 74,
        width: '100%'
    },

    inputSettings: {
        padding: Dimensions.get("window").height / 106,
        marginTop: Dimensions.get("window").height / 148,
        fontSize: Dimensions.get("window").height / 47,
        borderColor: '#FF8C00',
        color: '#FF8C00',
        borderStyle: 'solid',
        borderWidth: 1
    },

    buttonAcceptSettings: {
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

    textAcceptSettings: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: Dimensions.get("window").height / 41
    }

})