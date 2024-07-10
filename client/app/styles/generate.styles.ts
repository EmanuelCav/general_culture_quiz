import { Dimensions, StyleSheet } from 'react-native';

export const generateStyles = StyleSheet.create({

    containerGenerate: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: Dimensions.get("window").height / 66,
        paddingVertical: Dimensions.get("window").height / 74,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderStyle: 'solid'
    },

    textGenerate: {
        fontSize: Dimensions.get("window").height / 47,
        color: '#ffffff',
        fontWeight: '500',
        marginLeft: Dimensions.get("window").width / 36
    }

})