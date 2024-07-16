import { View } from 'react-native'

import ImageTitle from './components/imageTitle'
import TextTitle from './components/textTitile'

import { homeStyles } from '../../styles/home.styles'

import { LanguagesTypes } from '../../types/key.type'

const Title = ({ language }: { language: LanguagesTypes }) => {
    return (
        <View style={homeStyles.containerTitle}>
            <ImageTitle />
            <TextTitle language={language} />
        </View>
    )
}

export default Title