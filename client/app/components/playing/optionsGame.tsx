import { View } from 'react-native'

import SectionOptions from './components/options/sectionOptions'

import { playingStyles } from '../../styles/playing.styles'

import { OptionsPropsTypes } from '../../types/props.types'

const OptionsGame = ({ options, nextQuestion, amountOptions, isHelped, optionsHelped }: OptionsPropsTypes) => {
    return (
        <View style={playingStyles.containerOptions}>
            <SectionOptions options={options.slice(0, options.length / 2)} nextQuestion={nextQuestion} amountOptions={amountOptions} isHelped={isHelped} optionsHelped={optionsHelped} />
            <SectionOptions options={options.slice(options.length / 2, options.length)} nextQuestion={nextQuestion} amountOptions={amountOptions} isHelped={isHelped} optionsHelped={optionsHelped} />
        </View>
    )
}

export default OptionsGame