import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ItemHistory from '../components/history/itemHistory'

import { IReducer } from '../interface/General'
import { StackNavigation } from '../types/props.types'

import { selector } from '../helper/selector'

const History = ({ navigation }: { navigation: StackNavigation }) => {

  const dashboard = useSelector((state: IReducer) => selector(state).dashboard)

  const dispatch = useDispatch()

  return (
    <FlatList
      data={dashboard.dashboards}
      renderItem={({ item }) => <ItemHistory item={item} dispatch={dispatch} navigation={navigation} dashboards={dashboard.dashboards} />}
      keyExtractor={(_, index) => String(index)}
    />
  )
}

export default History