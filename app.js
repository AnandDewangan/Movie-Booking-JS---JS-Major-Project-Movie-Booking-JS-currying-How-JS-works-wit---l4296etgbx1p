import {fetchMovieAvailability,fetchMovieList} from "./api.js"
let movies =[];
let loading = true;
const loaderElement = document.getElementById("loader");

function showLoader(){
  loaderElement.className="d-block";
}
function hideLoader(){
  loaderElement.className="d-none";
}

function showMovies(){
  const mainElement = document.querySelector("main");
  const divElement = document.querySelector("div");
  divElement.className="movie-holder";
  mainElement.appendChild(divElement);
  
  for(let movie of movies){
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `<a class="movie- link" href="/${movie.name}">
    <div class="movie" data- d="${movie.name}">
    <div class="movie-img-wrapper">
      <img src="${movie.imgUrl}" width="300px">
    </div>
    <h4>${movie.name}</h4>
    </div>
    </a>`
  }
}

async function getMovies(){
  const response = await fetchMovieList();
//   movies = await response.json();.
  showMovies();
}

getMovies();
