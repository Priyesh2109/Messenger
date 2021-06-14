import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"

const SelectChat = () => {
  return (
    <View style={styles.chatBanner}>
      <Text> Chats</Text>
      <TextInput style={styles.input} />
    </View>
  )
}

export default SelectChat

const styles = StyleSheet.create({
  chatBanner: {
    marginBottom: 500,
    backgroundColor: "blue",
    height: 100,
    width: 390,
    justifyContent: "center",
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})
