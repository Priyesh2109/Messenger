import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
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
    return <Text>No permissions have been set !</Text>
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.fixedRatio} type={type} ratio={"1:1"} />
      </View>
      <Button
        title="Flip view"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          )
        }}
      ></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
})
export default CameraScreen
