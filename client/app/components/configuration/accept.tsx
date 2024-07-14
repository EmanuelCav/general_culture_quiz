import { Pressable, Text } from "react-native"

import { configurationStyles } from "../../styles/configuration.styles"

const Accept = ({ func }: { func: () => void }) => {
  return (
    <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#ffa420' : '#FF8C00'
        },
        configurationStyles.buttonAccept
      ]} onPress={func}>
        <Text style={configurationStyles.textAccept}>Accept</Text>
    </Pressable>
  )
}

export default Accept