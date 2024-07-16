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
  const user = useSelector((state: IReducer) => selector(state).user)

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
            renderItem={({ item }) => <ItemHistory item={item} dispatch={dispatch} navigation={navigation} dashboards={dashboard.dashboards} user={user.user} />}
            keyExtractor={(_, index) => String(index)}
            ListHeaderComponent={<HeaderScreen func={comeback} language={user.user.language!}
            text={user.user.language === 'English' ? 'Point marker history' : user.user.language === 'Español' ? 'Historial del marcador de puntos' : 'Histórico do marcador de ponto'} />}
          />
        ) : (
          <>
            <HeaderScreen func={comeback} language={user.user.language!}
            text={user.user.language === 'English' ? 'Point marker history' : user.user.language === 'Español' ? 'Historial del marcador de puntos' : 'Histórico do marcador de ponto'} />
            <Text style={historyStyles.textHistory}>{user.user.language === 'English' ? 'You have not scoreboards yet' : user.user.language === 'Español' ? 'Aún no tienes marcadores' : 'Você ainda não tem placares'}</Text>
          </>
        )
      }
    </>
  )
}

export default History