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
        alignItems: 'center'
    },

    containCategory: {
        width: '100%',
    },
    
    textTitleCategory: {
        fontSize: Dimensions.get("window").height / 37,
        textAlign: 'center'
    },

    buttonSelect: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 62,
        borderRadius: 8
    },

    textButtonSelect: {
        fontSize: Dimensions.get("window").height / 42
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
        color: '#ffffff',
        fontWeight: '500'
    },

    containerPosition: {
        height: '8%'
    },

    containerRankingTags: {
        height: '10%'
    },

    containerUsersRanking: {
        flex: 1
    },

    containUserRank: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Dimensions.get("window").height / 106,
        justifyContent: 'space-between',
        borderColor: '#FF8C00',
        borderWidth: 1,
        borderStyle: 'solid'
    },

    conntainInfoUserRank: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containPoints: {
        height: '100%',
        width: '20%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    textInfoPoints: {
        fontSize: Dimensions.get("window").height / 53,
        color: '#ffffff'
    },

    nicknameRank: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#FF8C00'
    }

})