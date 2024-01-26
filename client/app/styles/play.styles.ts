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

    containerCategories: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
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
    }

})