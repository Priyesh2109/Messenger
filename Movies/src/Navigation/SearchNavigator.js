import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import SearchScreen from "../Screens/SearchScreen"

const Stack = createStackNavigator()

const searchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
export default searchNavigator
