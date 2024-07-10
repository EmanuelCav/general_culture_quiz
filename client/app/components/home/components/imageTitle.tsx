import { Image, View } from "react-native"
import { homeStyles } from "../../../styles/home.styles"

const ImageTitle = () => {
  return (
    <View style={homeStyles.containerEventTitle}>
      <Image alt='Icon' source={require('../../../../assets/image.png')} resizeMode='contain' style={homeStyles.imageTitle} />
    </View>
  )
}

export default ImageTitle