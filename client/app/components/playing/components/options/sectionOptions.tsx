import { View } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import Option from './option'

import { SectionOptionsPropsTypes } from '../../../../types/props.types'

const SectionOptions = ({ options, amountOptions, nextQuestion }: SectionOptionsPropsTypes) => {
    return (
        <View style={playingStyles.containerSectionOptions}>
            {
                options.map((option: string, index: number) => {
                    return <Option option={option} nextQuestion={nextQuestion} key={index} amountOptions={amountOptions} />
                })
            }
        </View>
    )
}

export default SectionOptions