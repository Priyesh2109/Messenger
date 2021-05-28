import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

import LocalActivityIcon from "@material-ui/icons/LocalActivity"

const SettingsScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.firstText}> Settings</Text>
        </View>

        <View style={styles.userProfile}>
          <Text>Priyesh </Text>
        </View>

        <View style={styles.firstBlock}>
          <Text>Starred Messages</Text>

          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>WhatsApp web/Desktop</Text>
        </View>

        <View style={styles.secondBlock}>
          <Text>Account</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Chats</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Notification Service</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Storage and Data</Text>
        </View>

        <View style={styles.thirdBlock}>
          <Text style={styles.blockText}>Help</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Tell A Friend</Text>
        </View>
      </ScrollView>
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
    marginBottom: 50,
    padding: 10,
    backgroundColor: "white",
  },
  blockText: {
    padding: 15,
    paddingLeft: 0,
  },
  secondBlock: {
    marginBottom: 50,
    padding: 10,
    backgroundColor: "white",
  },
  thirdBlock: {
    padding: 10,
    backgroundColor: "white",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "grey",
    marginTop: 10,
    paddingLeft: 5,
  },
})

export default SettingsScreen
