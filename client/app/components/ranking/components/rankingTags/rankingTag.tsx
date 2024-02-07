import { Pressable, Text } from 'react-native'

import { playStyles } from '../../../../styles/play.styles'

import { RankingTagPropsType } from '../../../../types/props.types'

const RankingTag = ({ text, date, changeRanking, rankingText }: RankingTagPropsType) => {

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#ffa420' : `${rankingText === text ? '#FF8C00' : '#ffffff'}`
            }, playStyles.rankingTag]} onPress={() => changeRanking(text, date)}>
            <Text style={[playStyles.textRankingTag, {
                color: rankingText === text ? '#ffffff' : '#FF8C00'
            }]}>{text}</Text>
        </Pressable>
    )
}

export default RankingTag