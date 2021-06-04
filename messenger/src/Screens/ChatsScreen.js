import React from "react"
import { View, Text, StyleSheet } from "react-native"

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat screen here</Text>
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
export default ChatsScreen
