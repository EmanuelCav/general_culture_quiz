import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ItemHistory from '../components/history/itemHistory'
import HeaderScreen from '../components/components/headerScreen'

import { IReducer } from '../interface/General'
import { StackNavigation } from '../types/props.types'

import { historyStyles } from '../styles/history.styles'

import { selector } from '../helper/selector'

const History = ({ navigation }: { navigation: StackNavigation }) => {

  const dashboard = useSelector((state: IReducer) => selector(state).dashboard)

  const dispatch = useDispatch()

  const comeback = () => {
    navigation.goBack()
  }

  return (
    <>
      {
        dashboard.dashboards.length > 0 ? (
          <FlatList
            data={dashboard.dashboards}
            renderItem={({ item }) => <ItemHistory item={item} dispatch={dispatch} navigation={navigation} dashboards={dashboard.dashboards} />}
            keyExtractor={(_, index) => String(index)}
            ListHeaderComponent={<HeaderScreen func={comeback} text='Point marker history' />}
          />
        ) : (
          <>
            <HeaderScreen func={comeback} text='Point marker history' />
            <Text style={historyStyles.textHistory}>You have not scoreboards yet.</Text>
          </>
        )
      }
    </>
  )
}

export default History