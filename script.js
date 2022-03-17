'use strict';

let numberOfFilms;
let genres = [];

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = 
 {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function (privat){
        if(privat) {
            privat = false;
        } else {
            privat = true;
        }
    
    }
};

console.log(numberOfFilms);
console.log(typeof(numberOfFilms));

function rememberMyFilms() {
    for(let i = 0; i < numberOfFilms; i++) {

        let filmAnswer = prompt("Один из последний просмотренных фильмов?", '');
    
        console.log(filmAnswer);
    
        if (filmAnswer.length == 0 || filmAnswer.length > 50 || filmAnswer == null) {
            //i--
            filmAnswer = prompt("Повторите ввод. Один из последний просмотренных фильмов?", '');
        }
    
        let filmRate = prompt("На сколько оцените его?", '');
    
        personalMovieDB.movies[filmAnswer] = filmRate;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(numberOfFilms < 10){
        alert("Просмотрено довольно мало фильмов");
    }
    else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert("Вы классический зритель");
    }
    else if (numberOfFilms > 30) {
        alert("Вы киноман");
    }
    else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } 
}

function writeYourGenres () {
    let counter = 1;
    
    for(let i =0; i < 3; i++) {
        while(genres[i] == null || genres[i] == '') {
            genres[i] = prompt(`Ваш любимый жанр под номером ${[i+1]}?`, '');
          }
    }

    genres.forEach(element => {
        console.log(`Любимый жанр ${counter} - это ${element}`);
        counter++;
    });
}
writeYourGenres();

function toggleVisibleMyDB(privat){
    if(privat) {
        privat = false;
    } else {
        privat = true;
    }

}
console.log(genres);



// switch(true){
//     case numberOfFilms < 10: 
//         alert("Просмотрено довольно мало фильмов");
//         break;
//     case numberOfFilms >= 10 && numberOfFilms <= 30: 
//         alert("Вы классический зритель");
//         break;
//     case numberOfFilms > 30: 
//         alert("Вы киноман");
//         break;
//     default: alert("Произошла ошибка");
// }

// numberOfFilms < 10 ? alert("Просмотрено довольно мало фильмов") :
// numberOfFilms >= 10 && numberOfFilms <= 30 ? ("Вы классический зритель") : 
// numberOfFilms > 30 ? ("Вы киноман") : ("Произошла ошибка");

console.log(personalMovieDB);
