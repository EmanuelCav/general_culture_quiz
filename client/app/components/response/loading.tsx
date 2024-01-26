import { Text, View } from "react-native"
import { useSelector } from 'react-redux';

import { generalStyles } from "../../styles/general.styles"

import { IReducer } from "../../interface/General";

import { selector } from "../../helper/selector";

const Loading = () => {

    const response = useSelector((state: IReducer) => selector(state).response)

    return (
        <>
            {
                response.loading &&
                <View style={generalStyles.containerLoading}>
                    <Text>Loading</Text>
                </View>
            }
        </>
    )
}

export default Loading