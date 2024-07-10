import { Dimensions, Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ButtonMenuPropsType } from '../../types/props.types'

import { generalStyles } from '../../styles/general.styles'

const ButtonMenu = ({ func, text, icon }: ButtonMenuPropsType) => {
  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#ffa420' : '#FF8C00'
      },
      generalStyles.buttonMenu
    ]} onPress={func}>
      <View style={generalStyles.buttonMenuIcon}>
        <Icon name={icon} color='#ffffff' size={Dimensions.get("window").height / 28.66} />
      </View>
      <Text style={generalStyles.buttonMenuText}>{text}</Text>
    </Pressable>
  )
}

export default ButtonMenu