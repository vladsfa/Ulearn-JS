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

for (let i = 0; i < 2; i++) {
    let film, rating;
    while(!film || !rating || film.length > 50)
    {
        film = prompt(questFilm, "");
        rating = prompt(questRating, "");
    }
    personalMovieDB.movies[film] = rating;
}

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

console.log(personalMovieDB);
