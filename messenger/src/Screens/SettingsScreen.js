import React from "react"
import { View, Text, StyleSheet } from "react-native"

const SettingsScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.firstText}> Settings</Text>
      </View>

      <View style={styles.userProfile}>
        <Text>Priyesh Profile</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  firstText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  userProfile: {},
})

export default SettingsScreen
