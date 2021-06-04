import React from "react"
import { View, Text, StyleSheet } from "react-native"

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Camera functionality here</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
export default CameraScreen
