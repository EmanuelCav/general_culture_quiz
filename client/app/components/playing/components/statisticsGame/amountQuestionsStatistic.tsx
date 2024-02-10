import { Text, View } from 'react-native'

import { AmountQuestionsStatisticPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const AmountQuestionsStatistic = ({ numberQuestion, questions }: AmountQuestionsStatisticPropsType) => {
  return (
    <View style={{ width: '42%' }}>
      <Text style={playingStyles.textStatisticGame}>
        {numberQuestion}/{questions}
      </Text>
    </View>
  )
}

export default AmountQuestionsStatistic