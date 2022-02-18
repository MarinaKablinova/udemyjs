let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = 
 {
    count: numberOfFilms,
    movies: new Object(),
    actors: new Object(),
    genres: new Array(),
    privat: false
}

let filmAnswer0 = prompt("Один из последний просмотренных фильмов?", '');
let filmRate0 = prompt("На сколько оцените его?", '');

let filmAnswer1 = prompt("Один из последний просмотренных фильмов?", '');
let filmRate1 = prompt("На сколько оцените его?", '');

personalMovieDB.movies = {
    filmAnswer0: filmRate0,
    filmAnswer1: filmRate1
}

console.log(personalMovieDB);