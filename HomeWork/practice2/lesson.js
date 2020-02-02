// var x = 1;
// var y = 2;

// var res1 = (x + y) * 4 + "";
// console.log(res1); 
// console.log(typeof res1);

// var res2 = (x > 0 || y > 1) + "2"
// console.log(res2); 
// console.log(typeof res2);

// var res3 = (x > 0 || y > 2)
// console.log(res3);
// console.log(typeof res3);

// var res4 = (x + y) - "qwerty"
// console.log(res4); 
// console.log(typeof res4);                                                 //  task 1

// var res = prompt("Please, write a number.", '');
// var a = +res;

// if (a > 0 && (a % 2 == 0)) {
//     console.log('Число позитивне та парне')
//     }
// else if (a > 0 && (a % 2 == 1)) {
//     console.log('Число позитивне та не парне')
// }
// else {
//     console.log('Число не позитивне')
// }                                            // a

// if (a > 0 && (a % 7 == 0)){
//     console.log('Дане число кратне 7')
// }
// else{
//     console.log('Дане число не кратне 7')
// }                                     //b                                 // task 2

// let isAdult = confirm('Вам є 18 років?');
// if (isAdult){
//     console.log('Ви досягли повнолітнього віку')
// }
// else{
//     console.log('Ви ще надто молоді')
// }                                                                          // task 3

// let first = prompt('Введіть сторону трикутника a', '');
// let second = prompt('Введіть сторону трикутника b', '');
// let third = prompt('Введіть сторону трикутника c', '');

// let a = Number(first);
// let b = Number(second);
// let c = Number(third);

// if (a < 0){
//     console.log('Incorrect data')
// }
// if (b < 0){
//     console.log('Incorrect data')
// }
// if (c < 0){
//     console.log('Incorrect data')
// }

// let p = (a + b + c) * 1/2   //півпериметр

// let summ = (p * (p - a)*(p - b) * (p - c))**(1/2);  // формула Герона для визн. площі трик.

// console.log(Math.floor(summ * 1000) / 1000)
              

// if (a == b || b == c || c == a){
//     console.log('Трикутник прямокутний')
// }
// else{
//     console.log('Трикутник не прямокутний')
// }                                                                       // task 4

// let currentTime = new Date ();

// console.log(currentTime.getHours())


// if (currentTime >= 23 && currentTime <= 5 ) {
//     console.log('Доброї ночі');
// }
// else if (currentTime > 5 && currentTime <= 11){
//     console.log('Доброго ранку')
// }
// else if (currentTime > 11 && currentTime <= 17) {
//     console.log('Доброго дня')
// }
// else {
//     console.log('Доброго вечора')
// }                                                    // variant 1


// console.log(typeof i)


// let currentTime = new Date ();

// switch (currentTime.getHours()) {
//     case 23:
//         console.log('Доброї ночі');
//         break;
//     case 0:
//         console.log('Доброї ночі');
//         break;
//     case 1:
//         console.log('Доброї ночі');
//         break;  
//     case 2:
//         console.log('Доброї ночі');
//         break; 
//     case 3:
//         console.log('Доброї ночі');
//         break;
//     case 4:
//         console.log('Доброї ночі');
//         break;  
//     case 5:
//         console.log('Доброго ранку');
//         break;   
//     case 6:
//         console.log('Доброго ранку');
//         break;
//     case 7:
//         console.log('Доброго ранку');
//         break;  
//     case 8:
//         console.log('Доброго ранку');
//         break; 
//     case 9:
//         console.log('Доброго ранку');
//         break;
//     case 10:
//         console.log('Доброго ранку');
//         break;  
//     case 11:
//         console.log('Доброго ранку');
//         break;
//     case 12:
//         console.log('Доброго дня');
//         break;
//     case 13:
//         console.log('Доброго дня');
//         break;  
//     case 14:
//         console.log('Доброго дня');
//         break; 
//     case 15:
//         console.log('Доброго дня');
//         break;
//     case 16:
//         console.log('Доброго дня');
//         break;  
//     case 17:
//         console.log('Доброго дня');
//         break;   
//     case 18:
//         console.log('Доброго вечора');
//         break;
//     case 19:
//         console.log('Доброго вечора');
//         break;  
//     case 20:
//         console.log('Доброго вечора');
//         break; 
//     case 21:
//         console.log('Доброго вечора');
//         break;
//     case 22:
//         console.log('Доброго вечора');
//         break;
//     default:
//         console.log('Only hello');  
// }                                 // variant 2                    // task 5

// let arr = [];

// arr [0] = 25;
// arr [1] = 'hello';
// arr [2] = true;
// arr [3] = null;

// console.log(arr.length);

// let customer = prompt('Введіть число', '');
// arr [4] = customer;

// console.log(arr[4]);                                                // task 6
