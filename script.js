// console.error('Hello world');  /* Вывож текста в консоль */

// console.clear();               Очищает

// console.log('Hello user');

// alert('Hello world');          /* Выводит браузерное оповещение */

// prompt('Enter your name');     /* Выводить окно с полем для ввода */

// confirm('Confirm');            /* Запрашивает потверждение */

// const firstName = 'Feruz';
// const lastName = 'Nizamkhuzhaev';

// console.log(`Hello, ${firstName} ${lastName}`);  /* Шаблонная строка, чтобы лишние символы не писать для пробела */

// prompt('Enter your name');
// console.log(`Oh, hi ${firstName} ${lastName}`);
// console.log(firstName.length);        /* length для определения длины строки */

// const word = prompt('Enter a word'); /* prompt всплывающее окно в браузуре с полем для ввода данных  */
// const length = word.length;          /* length Чтобы узнать длину слово введенное пользователем  */

// console.log(length);                 /* Выводить в консоль  */

                                             /* Числа */
//  const kb = 15;
//  const bit = 8 * 1024 * 15;
//  console.log(bit);

// const miles = prompt('Enter miles: '); /* kilometers будет равен значению веденное пользователем умноженное на 1.6 */
// const kilometers = miles * 1.6;      /*  */
// console.log(+kilometers.toFixed(2)); /* toFixed говорит сколько значений выводить после запетую */    
//  /* + в начале переменной kilometers переводить строчного типа на числовой */


                             /* Boolean, null, undefined | План */
    // const first = true;
    // const second = false;
    // first && second;    /* Логическая умножения */
    // first || second;    /* Логическая сложения */ 
    // !first              /* Переводит на противоположное значение */         
    
    
                              /* Типы данных | typeof */
/* Опреатор typeof можно писать (5) и без 5  */

// let value;
// let double = typeof (typeof (value));

// console.log(double);


                                /* Сравнение значений */
// const number = prompt('Enter a number: ');
// const compare = number > 0;

// console.log(compare);


                                /* Логические выражения */
//    const num = prompt('Enter a number');
//    const compare = (num >= 10) && (num <= 99) || (num <= -10); 
   
//    console.log(compare);


                                /* Условные операторы  */
// const age = prompt('Enter your age: ');

// if (age < 18) {
//     alert('Too young');
// }   else if (age > 75) {
//     alert('Too old');
// }   else {
//     alert('Access granted');
// };

// const sym = prompt('M for male, F for female');

// const gender = (sym === 'M') ? 'male' : 'female';

// console.log(gender);



                                /* Оператор множественного выбора switch */
// let num = +prompt('Enter a number');

// switch (num) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

                            /* Циклы с предусловием*/

// let sum = 0;
// let number = 1;

// while (number <= 100) {
//     sum = sum + number;
//     number++;
// }

// console.log(sum); 

                         /*Циклы с пост условием */
// const res = (254 * 7) + (124 - 16)/9;

// let input;

// do {
//     input = prompt('(254 * 7) + (124 - 16)/9 = ?');
// }   while (input != res);

// console.log('Success');


                        /*Циклы со счётчиком */
// const input = +prompt('Enter a number: ');

// let factorial = 1;

// for (let i = 1; i <= input; i++) {
//     factorial = factorial * i;
// }

// console.log(factorial);


                        /* Прерывание цикла */
// let sum = 0;

// while (true) {
//     const input = prompt('Enter a number or = ')

//     if (input == '=') {
//         break;
//     }   else {
//         sum = sum + Number(input);
//     }
// }

// console.log(sum);



                        /* Объекты */
// const auto = {
//     model: 'Audi',
//     color: 'red',
//     year: 2012
// }

// const input = prompt('Enter a property: ');
// const hasProp = input in auto;

// if (hasProp) {
// delete auto[input];
// }  else {
//     auto[input] = null;
// }
//     console.log(auto);




                    /* Иван Петриченко */
// "use strict"; /* Режим современного кода */

// let number = 4.6;       /* Числовой тип  */

// const persone = 'Alex'; /* Строковой тип */

// // console.log(something); /* null тип несуществующий объект */ 

// let und;
// console.log(und);       /* undefined тип  пустой элемент */


// const obj = {
//    name: "John",
//    age: 25,
//    isMarried: false
// }

// console.log(obj.name);
// // console.log(obj ["name"]);

// let arr = ['plumb.png', 'orange.jpg', 'apple.bmp', {}, []];
// console.log(arr[1]);

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// const category = 'toys';
 
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;

// incr++;             /* Оператор инкримента */     /* Постфиксная форма */
// decr--;             /* Оператор декримента */

// console.log(++incr);    /* Префиксная форма */
// console.log(--decr);

// console.log(5%2);        /* Остаток от деления */

// console.log(2*4 == '8');  /* Сравнение по значению */
// console.log(2*4 === 8);  /* Сравнение и по типу данных, строгое сравнение */

// const isChecked = true,
//       isClosed = true; 
      
// console.log(isChecked && isClosed);



                                        /* Практика */
const numberOfFilms = +prompt('Сколько  фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных - фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных - фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

    personalMovieDb.movies[a] = b;
    personalMovieDb.movies[c] = d;

    console.log(personalMovieDb);