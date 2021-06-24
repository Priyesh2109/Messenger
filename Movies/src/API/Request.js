import axios from 'axios';
import { URL, API_KEY } from '../Config/const';

 const fetchMovies = async (search, movies) => {
  console.log('fetch movies', search);
  if (!search) {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    return [...movies, ...response.data.results];
  } else {
    console.log('in else');
    const response = await axios.get(
      `${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}`
    );
    return [...response.data.results];
  }
 };

 export default fetchMovies