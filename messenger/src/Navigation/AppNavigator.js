import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import SettingsNavigator from "./SettingsNavigator"
import CameraNavigator from "./CameraNavigator"
import ChatNavigator from "./ChatsNavigator"
import ListingsNavigator from "./ListingsNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingsNavigator} />
    <Tab.Screen name="Camera" component={CameraNavigator} />
    <Tab.Screen name="Chats" component={ChatNavigator} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
)

export default AppNavigator
