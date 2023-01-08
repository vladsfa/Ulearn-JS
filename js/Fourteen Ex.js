"use strict";

const getCorrectData = (message, callbackFunc = (data) => true) => {
    let data;
    while (!data || !callbackFunc(data)){
        data = prompt(message, "");
    }
    return data;
};


const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    run() {
        this.start();
        this.rememberMyFilms();
        this.detectPersonalLevel();
        this.writeYourGenres();
        this.showMyDB();
    },
    start() {
        this.count = +getCorrectData("Сколько фильмов вы уже посмотрели?");
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let film = getCorrectData(
                "Один из последних просмотренных фильмов?",
                (data) => data.length <= 50);
            let rating = getCorrectData("На сколько оцените его?");
            this.movies[film] = rating;
        }    
    },
    detectPersonalLevel() {
        if(this.count < 10){
            alert("Просмотрено довольно мало фильмов");
        }
        else if(10 <= this.count < 30){
            alert("Вы классический зритель");
        }
        else if(this.count > 30){
            alert("Вы киноман");
        }
        else{
            alert("Произошла ошибка");
        } 
    },
    showMyDB() {
        if (!this.private) {
            console.log(this);     
        }
    },
    writeYourGenres() {
        for (let i = 0; i <= 3; i++) {
            this.genres.push(
                getCorrectData(`Ваш любимый жанр под номером ${i + 1}`));
        }
        this.genres.forEach((e, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${e}`);
        });
    },
    toggleVisibleMyDb() {
        this.private = !this.private;
    }
};