import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import ChatsScreen from "../Screens/ChatsScreen"

const Stack = createStackNavigator()

const ChatNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chats"
      component={ChatsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default ChatNavigator
