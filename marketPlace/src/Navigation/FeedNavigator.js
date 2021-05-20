import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import ListingsScreen from "../Screens/ListingsScreen"

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingsScreen} />
  </Stack.Navigator>
)
export default FeedNavigator
