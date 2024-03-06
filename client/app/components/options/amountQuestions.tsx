import { View, Text } from 'react-native'

import Slider from '@react-native-community/slider';

import { playStyles } from '../../styles/play.styles'

import { AmountQuestionsPropsType } from '../../types/props.types';

import { IOptionUser } from '../../interface/User';

const AmountQuestions = ({ amountQuestions, setOptionsUser }: AmountQuestionsPropsType) => {
    return (
        <View style={playStyles.containerAmountQuestion}>
            <Text style={playStyles.titleOption}>Mueve el cursor para elegír la cantidad de preguntas</Text>
            <Text style={playStyles.textAlertAmountQuestion}>{amountQuestions}</Text>
            <Slider
                style={{ width: '100%' }}
                thumbTintColor='#FF8C00'
                minimumValue={5}
                maximumValue={20}
                value={amountQuestions}
                minimumTrackTintColor="#FF8C00"
                maximumTrackTintColor="#ffb861"
                onValueChange={(value) => setOptionsUser((optionData: IOptionUser) => ({
                    ...optionData, amountQuestions: value
                }))}
                step={5}
                accessibilityRole={undefined}
            />
        </View>
    )
}

export default AmountQuestions