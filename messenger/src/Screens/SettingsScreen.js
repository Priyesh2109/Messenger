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
          <Icon style={styles.starIcon} name="star" />
          <Text>Starred Messages</Text>

          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>WhatsApp web/Desktop</Text>
          <Icon name="computer" />
        </View>

        <View style={styles.secondBlock}>
          <Text>Account</Text>
          <Icon name="settings" />
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Chats</Text>
          <Icon name="chat" />
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Notifications</Text>
          <Icon name="notifications" />
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Storage and Data</Text>
          <Icon name="storage" />
        </View>

        <View style={styles.thirdBlock}>
          <Text style={styles.blockText}>Help</Text>
          <Icon name="help" />
          <View style={styles.lineStyle} />
          <Text style={styles.blockText}>Tell A Friend</Text>
          <Icon name="heart" type="font-awesome-5" />
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
  starIcon: {
    paddingRight: 100,
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
