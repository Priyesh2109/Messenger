import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Icon } from "react-native-elements"
import { Avatar } from "react-native-elements"

const SettingsScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.firstText}> Settings</Text>
        </View>

        <View style={styles.userProfile}>
          <Text> Random person</Text>
          <Avatar
            rounded
            source={{
              uri: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            }}
          />
        </View>

        <View style={styles.firstBlock}>
          <Icon style={styles.icon} name="star" color="orange" size="30" />
          <Text style={styles.blockText}>Starred Messages</Text>
          <View style={styles.lineStyle}></View>
          <Icon style={styles.icon} name="computer" color="#1E8449" size="30" />
          <Text style={styles.blockText}>WhatsApp Web/Desktop</Text>
        </View>

        <View style={styles.secondBlock}>
          <Icon style={styles.icon} name="settings" color="#1E7EE3" size="30" />
          <Text style={styles.blockText}>Account</Text>
          <View style={styles.lineStyle}></View>
          <Icon style={styles.icon} name="chat" color="#1BDC47" size="30" />
          <Text style={styles.blockText}>Chats</Text>
          <View style={styles.lineStyle}></View>
          <Icon
            style={styles.icon}
            name="notifications"
            color="red"
            size="30"
          />
          <Text style={styles.blockText}>Notifications</Text>
          <View style={styles.lineStyle}></View>
          <Icon style={styles.icon} name="storage" color="#06A42A" size="30" />
          <Text style={styles.blockText}>Storage and Data</Text>
        </View>

        <View style={styles.thirdBlock}>
          <Icon style={styles.icon} name="help" color="#2256F7" size="30" />
          <Text style={styles.blockText}>Help</Text>
          <View style={styles.lineStyle}></View>
          <Icon
            style={styles.icon}
            name="heart"
            type="font-awesome-5"
            color="#F71E04"
            size="30"
          />
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
    bottom: 25,
    paddingLeft: 60,
    fontSize: 16,
  },
  icon: {
    paddingRight: 320,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "grey",
    marginBottom: 10,
  },
})

export default SettingsScreen
