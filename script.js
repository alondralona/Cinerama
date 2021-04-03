const APIKEY= "a9abe32e301cc47ca49435473c6ae4a2";
const APIURL = "https://api.themoviedb.org/3/movie/5/recommendations?api_key=a9abe32e301cc47ca49435473c6ae4a2&language=en-US&page=2";
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';


const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=a9abe32e301cc47ca49435473c6ae4a2&query=";

const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('searchForm');

findMovies(APIURL);

async function findMovies(url){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
/*
    data.results.forEach((movie) => {
        const img = document.createElement('img');
        img.src = IMGPATH + movie.poster_path;

        document.body.appendChild(img);
        
    });
    */
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
                />
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








