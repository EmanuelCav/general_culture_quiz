import { View } from 'react-native'
import { useSelector } from 'react-redux';

import TitleCategory from '../components/categories/titleCategory'
import ActionCategory from '../components/categories/actionCategory'
import ShowCategories from '../components/categories/showCategories'
import ButtonAccept from '../components/components/buttonAccept';

import { IReducer } from '../interface/General';
import { StackNavigation } from '../types/props.types';

import { selector } from '../helper/selector';

import { playStyles } from '../styles/play.styles';

const Categories = ({ navigation }: { navigation: StackNavigation }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={playStyles.containerCategories}>
      <TitleCategory />
      <ActionCategory />
      <ShowCategories user={user.user} />
      <ButtonAccept text='ACEPTAR' func={goBack} />
    </View>
  )
}

export default Categories