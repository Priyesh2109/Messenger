import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import SettingsScreen from "../Screens/SettingsScreen"

const Stack = createStackNavigator()

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
export default SettingsNavigator