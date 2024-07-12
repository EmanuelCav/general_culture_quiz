import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Item from '../components/generate/item'

import { StackNavigation } from '../types/props.types'
import { IReducer } from '../interface/General'

import { dashboardsGenerator } from '../helper/dashboard'
import { selector } from '../helper/selector'

const Generate = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  return (
    <FlatList
      data={dashboardsGenerator}
      renderItem={({ item }) => <Item item={item} dispatch={dispatch} navigation={navigation} user={user.user.id!} />}
      keyExtractor={(_, index) => String(index)}
    />
  )
}

export default Generate