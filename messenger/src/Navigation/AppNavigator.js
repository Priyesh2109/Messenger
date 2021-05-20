import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import SettingsNavigator from "./SettingsNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
)

export default AppNavigator
