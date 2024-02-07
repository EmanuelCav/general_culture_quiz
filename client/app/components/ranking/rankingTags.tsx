import { View } from 'react-native'

import { playStyles } from '../../styles/play.styles'

import RankingTag from './components/rankingTags/rankingTag'

import { RankingTagsPropsType } from '../../types/props.types'

const RankingTags = ({ rankingText, changeRanking }: RankingTagsPropsType) => {

  return (
    <View style={playStyles.containerRankingTags}>
      <RankingTag text='Total' date='total' changeRanking={changeRanking} rankingText={rankingText} />
      <RankingTag text='Año' date='year' changeRanking={changeRanking} rankingText={rankingText} />
      <RankingTag text='Mes' date='month' changeRanking={changeRanking} rankingText={rankingText} />
      <RankingTag text='Día' date='day' changeRanking={changeRanking} rankingText={rankingText} />
    </View>
  )
}

export default RankingTags