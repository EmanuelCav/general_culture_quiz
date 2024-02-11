import { Dimensions, Image, View } from "react-native"
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
                    <Image source={require('../../../assets/loading.gif')} alt="loading..." style={{
                        width: Dimensions.get("window").width / 2,
                        height: Dimensions.get("window").height / 2
                    }} resizeMode="center" />
                </View>
            }
        </>
    )
}

export default Loading