import { Pressable, ScrollView, Text, View } from 'react-native';

import Points from './components/point';

import { UpdateSettingsPropsType } from '../../../types/props.types';

import { annotatorStyles } from '../../../styles/annotator.styles';

const PointsHistory = ({ dashboard, handleUpdate }: UpdateSettingsPropsType) => {
  return (
    <View style={annotatorStyles.containerSettings}>
      <View style={annotatorStyles.containSettings}>
        <ScrollView>
          {
            dashboard.pointsHistory?.length === 0 ? (
              <Text style={annotatorStyles.textNotPoint}>There are not points yet</Text>
            ) : (
              <>
                {
                  dashboard.pointsHistory?.map((point, index) => {
                    return <Points point={point} key={index} />
                  })
                }
              </>
            )
          }
        </ScrollView>
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