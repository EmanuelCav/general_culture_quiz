import { View } from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { EXPO_BANNER } from "@env";

import { generalStyles } from '../../styles/general.styles'

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : `${EXPO_BANNER}`;

const Banner = () => {
  return (
    <View style={generalStyles.containerBanner}>
      <BannerAd
        unitId={adUnitId as string}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  )
}

export default Banner