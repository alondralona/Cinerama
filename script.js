const APIKEY= "a9abe32e301cc47ca49435473c6ae4a2";
const APIURL = "https://api.themoviedb.org/3/movie/5/recommendations?api_key=a9abe32e301cc47ca49435473c6ae4a2&language=en-US&page=2";

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

async function findMovies(){
    const response = await fetch(APIURL);
    const data = await response.json();

    console.log(data);
/*
    data.results.forEach((movie) => {
        const img = document.createElement('img');
        img.src = IMGPATH + movie.poster_path;

        document.body.appendChild(img);
        
    });
    */
    return data;

}

findMovies();

