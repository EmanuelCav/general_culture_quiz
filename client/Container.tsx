import React, { ReactNode } from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.container} alt='screen' resizeMode='cover' >
        {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
        backgroundColor: '#ffcdae',
        paddingHorizontal: Dimensions.get("window").width / 52,
        paddingVertical: Dimensions.get("window").height / 106
    }
})


export default Container