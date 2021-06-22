import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import axios from "axios"
import fetchMovies from "../Requests.js/fetchMovies"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [movies, setMovies] = useState([])

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
