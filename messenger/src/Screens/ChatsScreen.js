import React from "react"
import { View, Text, StyleSheet } from "react-native"
import SelectChat from "../Components/SelectChat"

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <SelectChat />
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
