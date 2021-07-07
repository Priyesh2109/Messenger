import React, { useState, useEffect } from "react"
import {
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native"
import { Button } from "react-native-elements"
import { auth } from "../firebase"

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pasword, setPasword] = useState("")
  const [name, setName] = useState("")

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, pasword)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: email,
        })
      })
      .catch((error) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.textColor}> Create an account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Pasword"
          type="pasword"
          secureTextEntry
          value={pasword}
          onChangeText={(text) => setPasword(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Sign Up !!"
        onPress={register}
      />
      <Button
        onPress={() => navigation.navigate("Login")}
        containerStyle={styles.button}
        title="Login !!"
      />

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    backgroundColor: "transparent",
  },
  textColor: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
  },
  inputBox: {
    height: 40,
    fontWeight: "bold",
    width: 300,
    margin: 10,
    marginLeft: 5,
    borderWidth: 4,
    backgroundColor: "white",
    borderRadius: 7,
    borderColor: "white",
  },
  button: {
    width: 300,
    marginTop: 10,
    color: "white",
  },
})

export default SignUpScreen
