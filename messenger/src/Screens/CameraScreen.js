import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Camera } from "expo-camera"

function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])
  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>Give me permission to your camera !</Text>
  }
  return (
    <View style={styles.container}>
      <Text>Camera functionality here soon </Text>
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
