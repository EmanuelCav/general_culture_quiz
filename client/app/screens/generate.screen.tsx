import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Item from '../components/generate/item'
import HeaderScreen from '../components/components/headerScreen'

import { StackNavigation } from '../types/props.types'
import { IReducer } from '../interface/General'

import { dashboardsGenerator } from '../helper/dashboard'
import { selector } from '../helper/selector'

const Generate = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const dashboard = useSelector((state: IReducer) => selector(state).dashboard)

  const dispatch = useDispatch()

  const comenback = () => {
    navigation.goBack()
  }

  return (
    <FlatList
      data={dashboardsGenerator}
      renderItem={({ item }) => <Item item={item} dispatch={dispatch} navigation={navigation} user={user.user.id!} dashboards={dashboard.dashboards} />}
      keyExtractor={(_, index) => String(index)}
      ListHeaderComponent={<HeaderScreen func={comenback} language={user.user.language!}
      text={user.user.language === 'English' ? 'Select a sport to generate a scorecard' : user.user.language === 'Español' ? 'Selecciona un deporte para generar un marcador' : 'Selecione um esporte para gerar um placar'} />}
    />
  )
}

export default Generate