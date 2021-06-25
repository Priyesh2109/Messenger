import React, { useState, useEffect } from "react"
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native"

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pasword, setPasword] = useState("")

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPasword(text)}
          value={pasword}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </SafeAreaView>
      <Text onPress={() => navigation.navigate("Home")}>
        hey click here to go the HomeScreen and search movies
      </Text>
    </>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})

export default SignUpScreen
