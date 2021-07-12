import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../Screens/HomeScreen"
import SignUpScreen from "../Screens/SignUp"
import LoginScreen from "../Screens/LoginScreen"
import MoreInfoScreen from "../Screens/MoreInfoScreen"

const Stack = createStackNavigator()

const homeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="moreInfo" component={MoreInfoScreen} />
  </Stack.Navigator>
)
export default homeNavigator
