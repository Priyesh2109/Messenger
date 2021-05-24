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

      <View style={styles.firstBlock}>
        <Text>Starred Messages</Text>
        <Text>WhatsApp web/Desktop</Text>
      </View>

      <View style={styles.secondBlock}>
        <Text>Account</Text>
        <Text>Chats</Text>
        <Text>Notification Service</Text>
        <Text>Storage and Data</Text>
      </View>

      <View style={styles.thirdBlock}>
        <Text>Help</Text>
        <Text>Tell A Friend</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  firstText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userProfile: {
    marginBottom: 40,
    padding: 10,
    backgroundColor: "white",
  },
  firstBlock: {
    marginBottom: 100,
    padding: 10,
    backgroundColor: "white",
  },
  secondBlock: {
    marginBottom: 150,
    padding: 10,
    backgroundColor: "white",
  },
  thirdBlock: {
    padding: 10,
    backgroundColor: "white",
  },
})

export default SettingsScreen
