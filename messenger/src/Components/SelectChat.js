import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"
import { Icon } from "react-native-elements"

const SelectChat = () => {
  return (
    <View style={styles.chatBanner}>
      <Text style={styles.bannerText}> Messages</Text>
      <Icon name="message" />
      <TextInput style={styles.input} placeholder="search" />
    </View>
  )
}

export default SelectChat

const styles = StyleSheet.create({
  chatBanner: {
    marginBottom: 520,
    backgroundColor: "white",
    height: 245,
    width: 390,
    justifyContent: "center",
    borderRadius: 5,
  },
  bannerText: {
    paddingBottom: 10,
    marginLeft: 30,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "gainsboro",
  },
})
