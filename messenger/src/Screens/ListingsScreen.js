import React from "react"
import { View, Text, StyleSheet } from "react-native"

const ListingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the screen where collectables will be listed!</Text>
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
export default ListingsScreen
