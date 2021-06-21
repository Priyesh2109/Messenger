import React from "react"
import { View, Text, StyleSheet } from "react-native"
import axios from "axios"

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        There will be a searchbar here allowing users to search for movies
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default SearchScreen
