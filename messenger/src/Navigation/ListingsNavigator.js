import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import ListingsScreen from "../Screens/ListingsScreen"

const Stack = createStackNavigator()

const ListingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
export default ListingsNavigator
