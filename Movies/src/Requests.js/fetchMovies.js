import React from "react"
import { API_KEY, URL } from "../API/Const"
import axios from "axios"

const fetchMovies = async (search) => {
  const response = await axios.get(
    `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
  )
  return [...response.data.results]
}

export default fetchMovies
