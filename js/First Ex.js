const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const questFilm = "Один из последних просмотренных фильмов?";
const questRating = "На сколько оцените его?";

const firstFilm = prompt(questFilm, "");
const firstRating = prompt(questRating, "");
const secondFilm = prompt(questFilm, "");
const secondRating = prompt(questRating, "");

personalMovieDB.movies[firstFilm] = firstRating;
personalMovieDB.movies[secondFilm] = secondRating;

console.log(personalMovieDB);
