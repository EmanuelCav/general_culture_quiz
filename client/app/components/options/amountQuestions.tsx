import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider';

import { playStyles } from '../../styles/play.styles'

import { AmountQuestionsPropsType } from '../../types/props.types';

const AmountQuestions = ({ amountQuestions, setOptionsUser }: AmountQuestionsPropsType) => {
    return (
        <View style={playStyles.containerAmountQuestion}>
            <Text style={playStyles.titleOption}>Mueve el cursor para elegír la cantidad de preguntas</Text>
            <Text style={playStyles.textAlertAmountQuestion}>{amountQuestions}</Text>
            <Slider
                style={{ width: '100%' }}
                thumbTintColor='#597EEE'
                minimumValue={5}
                maximumValue={30}
                value={amountQuestions}
                minimumTrackTintColor="#597EEE"
                maximumTrackTintColor="#4488BB"
                onValueChange={(value) => setOptionsUser({
                    amountQuestions: value
                })}
                step={5}
                accessibilityRole={undefined}
            />
        </View>
    )
}

export default AmountQuestions