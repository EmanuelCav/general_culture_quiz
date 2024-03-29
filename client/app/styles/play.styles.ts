import { Dimensions, StyleSheet } from 'react-native';

export const playStyles = StyleSheet.create({

    containerAmountOptions: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        padding: Dimensions.get("window").height / 46
    },

    containerAmountQuestion: {
        height: '30%',
        padding: Dimensions.get("window").height / 46,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },

    titleOption: {
        fontSize: Dimensions.get("window").height / 37,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '500'
    },

    textAlertAmountQuestion: {
        fontSize: Dimensions.get("window").height / 37,
        fontWeight: '600',
        color: '#FF8C00'
    },

    containerCategories: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    containActionCategory: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '12%'
    },

    containCategory: {
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textTitleCategory: {
        fontSize: Dimensions.get("window").height / 37,
        textAlign: 'center',
        color: "#FF8C00",
        fontWeight: '500'
    },

    buttonSelect: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 62,
        borderRadius: 8,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid',
        marginVertical: Dimensions.get("window").height / 123,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonSelect: {
        fontSize: Dimensions.get("window").height / 50,
        color: '#ffffff'
    },

    containerShowCategories: {
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    containStatistic: {
        width: '33.33%',
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        height: '20%'
    },

    textCategoryIcon: {
        fontSize: Dimensions.get("window").height / 53,
        fontWeight: '500',
        textAlign: 'center'
    },

    containerPosition: {
        height: '8%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: Dimensions.get("window").width / 36
    },

    containerRankingTags: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Dimensions.get("window").height / 92
    },

    containerUsersRanking: {
        flex: 1,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    containUserRank: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 62,
        justifyContent: 'space-between',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        flex: 1
    },

    conntainInfoUserRank: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    containPoints: {
        height: '100%',
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    textInfoPoints: {
        fontSize: Dimensions.get("window").height / 53,
        color: '#ffffff'
    },

    nicknameRank: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#ffffff'
    },

    rankingTag: {
        borderWidth: 1,
        borderColor: '#FF8C00',
        borderStyle: 'solid',
        padding: Dimensions.get("window").height / 106,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textRankingTag: {
        fontSize: Dimensions.get("window").height / 46,
        fontWeight: '500'
    },

    positionText: {
        color: '#ffffff',
        fontSize: Dimensions.get("window").height / 46
    },

    buttonHelp: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        padding: Dimensions.get("window").height / 123,
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

    helpText: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#FF8C00'
    }

})