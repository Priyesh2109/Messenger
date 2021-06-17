import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native"
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

        <View style={styles.convoBlock}>
          <Text style={styles.blockText}> Messages</Text>
          <View style={styles.lineStyle}></View>
        </View>

        <View style={styles.convoBlock}>
          <Text style={styles.blockText}>Messages</Text>
          <View style={styles.lineStyle}></View>
        </View>
        <View style={styles.convoBlock}>
          <Text style={styles.blockText}>Messages</Text>
          <View style={styles.lineStyle}></View>
        </View>
        <View style={styles.convoBlock}>
          <Text style={styles.blockText}> Messages</Text>
          <View style={styles.lineStyle}></View>
        </View>
        <View style={styles.convoBlock}>
          <Text style={styles.blockText}>Messages</Text>
          <View style={styles.lineStyle}></View>
        </View>
      </ScrollView>
    </>
  )
}

export default SelectChat

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 10,
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

  convoBlock: {
    paddingTop: 90,
    marginLeft: 1,
    backgroundColor: "white",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    marginBottom: 10,
  },
})
