import {fetchMovieAvailability,fetchMovieList} from "./api.js"
let movies =[];

function showMovies(){
   
}

async function getMovies(){
  const response = await fetchMovieList();
//   movies = await response.json();.
  showMovies();
}

getMovies();
