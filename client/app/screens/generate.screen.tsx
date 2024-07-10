import { FlatList } from 'react-native'

import Item from '../components/generate/item'

import { dashboardsGenerator } from '../helper/dashboard'

const Generate = () => {

  return (
    <FlatList
      data={dashboardsGenerator}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(_, index) => String(index)}
    />
  )
}

export default Generate