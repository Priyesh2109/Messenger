import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Icon } from "react-native-elements"

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
          <Icon style={styles.icon} name="star" />
          <Text style={styles.blockText}>Starred Messages</Text>
          <Icon style={styles.icon} name="computer" />
          <Text style={styles.blockText}>WhatsApp web/Desktop</Text>
        </View>

        <View style={styles.secondBlock}>
          <Icon style={styles.icon} name="settings" />
          <Text style={styles.blockText}>Account</Text>
          <Icon style={styles.icon} name="chat" />
          <Text style={styles.blockText}>Chats</Text>
          <Icon style={styles.icon} name="notifications" />
          <Text style={styles.blockText}>Notifications</Text>
          <Icon style={styles.icon} name="storage" />
          <Text style={styles.blockText}>Storage and Data</Text>
        </View>

        <View style={styles.thirdBlock}>
          <Icon style={styles.icon} name="help" />
          <Text style={styles.blockText}>Help</Text>
          <Icon style={styles.icon} name="heart" type="font-awesome-5" />
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
  secondBlock: {
    marginBottom: 50,
    padding: 10,
    backgroundColor: "white",
  },

  thirdBlock: {
    marginBottom: 50,
    padding: 10,
    backgroundColor: "white",
  },
  blockText: {
    bottom: 30,
    paddingLeft: 70,
  },
  icon: {
    paddingRight: 320,
  },
})

export default SettingsScreen
