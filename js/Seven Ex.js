
let numberOfFilms;
function start() {
    while(!numberOfFilms)
    {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }    
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    let film, rating;
    for (let i = 0; i < 2; i++) {
        while(!film || !rating || film.length > 50)
        {
            film = prompt("Один из последних просмотренных фильмов?", "");
            rating = prompt("На сколько оцените его?", "");
        }
        personalMovieDB.movies[film] = rating;
    }    
}
rememberMyFilms();


function detectPersonalLevel() {
    if(personalMovieDB.count < 10)
    {
        alert("Просмотрено довольно мало фильмов");
    }
    else if(10 <= personalMovieDB.count < 30)
    {
        alert("Вы классический зритель");
    }
    else if(personalMovieDB.count > 30)
    {
        alert("Вы киноман");
    }
    else
    {
        alert("Произошла ошибка");
    }   
}
detectPersonalLevel();


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);     
    }
}
showMyDB();


function writeYourGenres(){
    for (let i = 0; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres.push(genre);
    }
}
writeYourGenres();