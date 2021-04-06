const APIKEY= "a9abe32e301cc47ca49435473c6ae4a2";
const APIURL = "https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=a9abe32e301cc47ca49435473c6ae4a2&language=en-US&page=1";
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';


const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key="+ APIKEY + "&query=";

const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('searchForm');


findMovies();

async function findMovies(url){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    displaySearch(data.results);
}

function displaySearch(movies){
    main.innerHTML = "";

    movies.forEach((movie) => {

        const {poster_path, title} = movie;

        const elementMovie = document.createElement('div');

        elementMovie.classList.add('movie');

        elementMovie.innerHTML = 
               `<img src = "${IMGPATH + poster_path}" 
                alt =""
                data-movie-id=${movie.id}/>
                <div class = "movie-info">
                    <h3>${title}</h3>
                </div>`
            ;
        main.appendChild(elementMovie);

    });
}


function displaySearchRec(movies){
    main.innerHTML = "";

    movies.forEach((movie) => {

        const {poster_path, title} = movie;

        const elementMovie = document.createElement('div');

        elementMovie.classList.add('movie');

        elementMovie.innerHTML = 
               `<img src = "${IMGPATH + poster_path}" 
                alt =""
                data-movie-id=${movie.id}/>
                <div class = "movie-info">
                    <h3>${title}</h3>
                </div>`
            ;
        main.appendChild(elementMovie);

    });
}

form.addEventListener("submit", (x) =>{
    x.preventDefault();

    const searchText = search.value;

    if(searchText){
        findMovies(SEARCHAPI + searchText);

        search.value = '';
    }


})
function generateUrl(path){
    const url = `https://api.themoviedb.org/3${path}?api_key=a9abe32e301cc47ca49435473c6ae4a2&language=en-US&page=1`;
    return url;
}

document.onclick = function(event){
    const target = event.target
    if(target.tagName.toLowerCase() === 'img'){
    const movieId = target.dataset.movieId;
    console.log('Event: ',event)
    console.log(target.dataset.movieId);

    const path = `/movie/${movieId}recommendations`;
    const url = generateUrl(path);

    fetch(url)
        .then((res) => res.json())
        .then((data) =>{
            console.log('Recommendations',data);
            displaySearchRec(data.results);
        })
        .catch((error) =>{
            console.log('Error:', error);
        });   
           
    }

   
}










