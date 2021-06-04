import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import CallsScreen from "../Screens/CallsScreen"

const Stack = createStackNavigator()

const CallNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Calls"
      component={CallsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default CallNavigator
