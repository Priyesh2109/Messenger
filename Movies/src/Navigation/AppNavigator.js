import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import homeNavigator from "./HomeNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={homeNavigator} />
  </Tab.Navigator>
)

export default AppNavigator
