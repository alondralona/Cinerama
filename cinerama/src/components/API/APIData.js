import axios from "axios";

const APIKEY: string = "a9abe32e301cc47ca49435473c6ae4a2";

export default {
  getMovies: (category: string) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${APIKEY}&language=en-US&page=1`;
    return axios.get(url).then((result) => result.data);
  },
  getSearch: (query: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${APIKEY}`;
    return axios.get(url).then((result) => result.data);
  },
  getMovieById: (movieId: number) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&append_to_response=videos`;
    return axios.get(url).then((result) => result.data);
  },
  getMostVoted: () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=vote_average.desc&include_adult=true&include_video=false&page=1`;
    return axios.get(url).then((result) => result.data);
  },
  getForiegnMovies: (category: string) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&region=${category}&sort_by=popularity.asc&include_adult=false&include_video=false&page=1`;
    return axios.get(url).then((result) => result.data);
  },
  getMoviesRec: (movieID: number) => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${APIKEY}&language=en-US&page=1`;
    return axios.get(url).then((result) => result.data);
  },
};
