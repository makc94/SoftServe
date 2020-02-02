// let mass = [2, 3, 4, 5];
// let result = 1;

// for (let i = 0; i < mass.length; i++) {

//     result = result * mass[i];

// }
// console.log(result);                            //for

// let mass = [2, 3, 4, 5];
// let result = 1;
// let i = 0;

// while (i < 4) {
//     result = result * mass[i];
//     i++;
// }
// console.log(result);                                // while          //task 1

// let mass = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15"
// ];
// let i;
// for (i = 0; i < 15; i++) {
//   if (i % 2 == 0) {
//     console.log(mass[i], "is even");
//   } else {
//     console.log(mass[i], "is odd");
//   }
// }                                                               // task 2

 

function randArray() {                         
let arr = []
 arr.length = c
 for ( let i = 0; i < arr.length; i++){
  arr.unshift(parseInt(Math.random() * 500));
  i++
  }
  return arr
}
let x = prompt('Введіть число')
let c = Number(x)
let res = randArray(c);
console.log(res);   



                                                                    // task 3

// function raiseToDegree(a, b) {
//   let result = a ** b;
//   return result;
// }

// let a = prompt("Напишіть число ");
// let b = prompt("Напишіть степінь ");

// let result = raiseToDegree(a, b);
// console.log(result);                                                    // task 4

// let array = [3, 4, 10, -5];
// let a = array;
// let b = 0;                          //кількість елем. котрі треба вивести

// function lastElem(a, b) {
//   if (b == 0 || b == 1) {
//     return a[3];
//   } else if (b == 2) {
//     return a.slice(2);
//   } else if (b == 3) {
//     return a.slice(1);
//   } else return a;
// }
// let elem = lastElem(a, b);

// console.log(lastElem(a, b));                                // task 5

// let sen = "i love java script";

// function bigWord(sen) {
//   sen = sen.split(" ");
//   let i = 0;
//   let x = sen.length;
//   for (i, x; i < x; i++) {
//     sen[i] = sen[i][0].toUpperCase() + sen[i].substr(1);
//   }

//   return sen.join(" ");
// }

// console.log(bigWord(sen));                                  // task 6
