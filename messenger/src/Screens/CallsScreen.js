import React from "react"
import { View, Text, StyleSheet } from "react-native"

const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>List of calls here</Text>
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
export default CallsScreen
