import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../Screens/HomeScreen"
import SignUpScreen from "../Screens/SignUp"

const Stack = createStackNavigator()

const homeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
export default homeNavigator
