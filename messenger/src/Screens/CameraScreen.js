import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Button, Image } from "react-native"
import { Camera } from "expo-camera"
import * as ImagePicker from "expo-image-picker"

function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)

  const [type, setType] = useState(Camera.Constants.Type.back)
  const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      const cameraStatus = await Camera.requestPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === "granted")

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status === "granted")
    })()
  }, [])
  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />
  }
  if (hasGalleryPermission === false || hasGalleryPermission === false) {
    return <Text>No permissions have been set !</Text>
  }
  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync(null)
      setImage(photo.uri)
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
          ref={(ref) => setCamera(ref)}
        />
      </View>

      <Button title="take a snap" onPress={() => takePicture()} />
      <Button
        title="Flip view"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          )
        }}
      />
      <Button title="pcik image" onPress={() => pickImage()} />
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  )
}
const styles = StyleSheet.create({
  cameraContainer: {
    height: 400,
    flexDirection: "column",
  },
  fixedRatio: {
    height: 550,
  },
})
export default CameraScreen
