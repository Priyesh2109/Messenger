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

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pasword, setPasword] = useState("")

  //register functionality here

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.textColor}> Create an account</Text>

      <View style={styles.inputContainer}>
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
          //onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Sign Up !"
        //onPress={register}
      />
      <Text onPress={() => navigation.navigate("Home")}>
        hey click here to go the HomeScreen and search for movies
      </Text>
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
