import React, { useState, useEffect } from "react"
import { View, StyleSheet, TextInput } from "react-native"
import { Button } from "react-native-elements"
import { KeyboardAvoidingView } from "react-native"
import { auth } from "../firebase"

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [pasword, setPasword] = useState("")

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.navigate("Home")
      }
    })
    return unsubscribe
  }, [])
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, pasword)
      .catch((error) => alert(error))
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Pasword"
          secureTextEntry
          type="pasword"
          value={pasword}
          onChangeText={(text) => setPasword(text)}
        />
      </View>

      <Button containerStyle={styles.button} title="Login" onPress={signIn} />

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
  inputContainer: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 10,
    color: "white",
  },
  image: {
    height: 100,
    width: 400,
    marginBottom: 70,
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
})
export default LoginScreen
