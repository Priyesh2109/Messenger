import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AccountNavigator from "../Navigation/AccountNavigator"
import FeedNavigator from "../Navigation/FeedNavigator"
const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
)

export default AppNavigator
