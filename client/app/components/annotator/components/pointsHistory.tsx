import { Dimensions, Pressable, ScrollView, Text, View } from 'react-native';

import Point from './components/point';

import { UpdateSettingsPropsType } from '../../../types/props.types';

import { annotatorStyles } from '../../../styles/annotator.styles';

const PointsHistory = ({ dashboard, handleUpdate }: UpdateSettingsPropsType) => {
  return (
    <View style={annotatorStyles.containerSettings}>
      <View style={annotatorStyles.containSettings}>
        {
          dashboard.pointsHistory?.length === 0 ? (
            <Text style={annotatorStyles.textNotPoint}>There are not points yet</Text>
          ) : (
            <ScrollView style={{ maxHeight: Dimensions.get("window").height / 1.2, width: '100%' }}>
              {
                dashboard.pointsHistory?.map((point, index) => {
                  return <Point point={point} dashboard={dashboard} key={index} />
                })
              }
            </ScrollView>
          )
        }
        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ffa420' : '#FF8C00'
          },
          annotatorStyles.buttonAcceptSettings
        ]} onPress={handleUpdate}>
          <Text style={annotatorStyles.textAcceptSettings}>Accept</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default PointsHistory