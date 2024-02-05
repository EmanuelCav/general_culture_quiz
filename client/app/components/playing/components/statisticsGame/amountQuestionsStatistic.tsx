import { Text } from 'react-native'

import { AmountQuestionsStatisticPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const AmountQuestionsStatistic = ({ numberQuestion, questions }: AmountQuestionsStatisticPropsType) => {
  return (
    <Text style={playingStyles.textStatisticGame}>
      {numberQuestion}/{questions}
    </Text>
  )
}

export default AmountQuestionsStatistic