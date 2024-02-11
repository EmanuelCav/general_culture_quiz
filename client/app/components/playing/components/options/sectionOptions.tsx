import { View } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import Option from './option'

import { OptionsPropsTypes } from '../../../../types/props.types'

const SectionOptions = ({ options, amountOptions, nextQuestion, isHelped, optionsHelped }: OptionsPropsTypes) => {
    return (
        <View style={playingStyles.containerSectionOptions}>
            {
                options.map((option: string, index: number) => {
                    return <Option option={option} disabled={isHelped ? optionsHelped.includes(option) : false}
                        nextQuestion={nextQuestion} key={index} amountOptions={amountOptions} />
                })
            }
        </View>
    )
}

export default SectionOptions