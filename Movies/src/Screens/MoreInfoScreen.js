import React from "react"
import { View, Text, StyleSheet } from "react-native"

const MoreInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Selected Movie info will show up here</Text>
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

export default MoreInfoScreen
