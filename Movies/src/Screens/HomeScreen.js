import React, { useEffect, useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { Card } from "react-native-paper"
import { EvilIcons } from "@expo/vector-icons"
import Constants from "expo-constants"
import axios from "axios"

import fetchMovies from "../API/Request"

const screen = Dimensions.get("screen")

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [searchNow, setSearchNow] = useState(false)

  useEffect(() => {
    fetchMovies(searchTerm, movies).then((data) => {
      setMovies(data)
    })
  }, [searchNow])

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder={"search movies"}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity
            onPress={() => {
              console.log("pressed")
              setSearchNow(!searchNow)
            }}
          >
            <EvilIcons
              name={searchTerm ? "search" : "refresh"}
              size={20}
              color="black"
              style={{ alignSelf: "center", marginHorizontal: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.movieListCard}>
          <FlatList
            data={movies}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <Card style={styles.movieCard}>
                  <TouchableOpacity>
                    <Image
                      source={{
                        uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                      }}
                      style={{ width: Constants.width, height: 200 }}
                    />
                  </TouchableOpacity>
                </Card>
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#212121",
  },
  inputCard: {
    position: "absolute",
    top: -40,
    margin: 20,
    left: 10,
    right: 10,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 100,
  },
  input: {
    padding: 10,
    flex: 1,
  },
  movieCard: {
    flex: 1,
    height: 200,
    margin: 5,
    alignSelf: "center",
    overflow: "hidden",
    borderWidth: 5,
  },
  movieListCard: {
    top: screen.height * 0.05,
  },
})
