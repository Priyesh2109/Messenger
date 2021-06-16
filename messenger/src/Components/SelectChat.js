import React from "react"
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native"
import { Icon } from "react-native-elements"

const SelectChat = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Icon name="message" color="green" style={styles.icon} />
          <Text style={styles.bannerText}> Messages</Text>

          <TextInput style={styles.input} placeholder="search" />
        </View>
        <View style={styles.convoContainer}>
          <Text>list of convos</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default SelectChat

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 20,
    backgroundColor: "white",
    height: 190,
    width: 390,
    justifyContent: "center",
    borderRadius: 5,
  },
  icon: {
    paddingLeft: 300,
  },
  bannerText: {
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

  convoContainer: {
    marginTop: 5,
    backgroundColor: "white",
    height: 600,
    width: 390,
    justifyContent: "center",
    borderRadius: 5,
  },
})
