import { View } from 'react-native'

import { homeStyles } from '../../styles/home.styles'

import ImageTitle from './components/imageTitle'
import TextTitle from './components/textTitile'

const Title = () => {
    return (
        <View style={homeStyles.containerTitle}>
            <ImageTitle />
            <TextTitle />
        </View>
    )
}

export default Title