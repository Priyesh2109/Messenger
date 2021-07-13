import axios from "axios"
import { URL, API_KEY } from "../Config/const"

const fetchMovies = async (search, movies) => {
  if (!search) {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`)
    return [...movies, ...response.data.results]
  } else {
    console.log("if typed something")
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
    )
    return [...response.data.results]
  }
}
export const fetchMoreInfo = async (id) => {
  const response = await axios.get(
    `${URL}movie/${id}/credits?api_key=${API_KEY}` //get cast and crew from selected Movie
  )
  console.log(response.data.crew)

  const director = response.data.crew.find(
    (dir) => dir.known_for_department === "Directing" // find director from selected Movie
  )
  const credits = response.data
  return { director: director, credits: credits } // an object with key value
}

export default fetchMovies
