import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import CameraScreen from "../Screens/CameraScreen"

const Stack = createStackNavigator()


const CameraNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )

  

export default CameraNavigator
