//                                                                                  task 1
// let i = 5;
// let i = "Test";
// let i = new Error("An error happened");
// console.log(testThrow(i));

// function testThrow() {
//   if (true) {
//     return i;
//   }
//   throw 'Error("An error happened';
// }

//                                                                                    task 2

// let width = 2;
// let height = 3;

// function calcRectangleArea() {
//   let area = width * height;
//   if (isNaN(area)) {
//     throw Error("Error, not a number");
//   }
//   return area;
// }
// try {
//   let i = calcRectangleArea();
//   console.log(i);
// } catch (err) {
//   console.log(err.name);
// }
// calcRectangleArea();

//                                                                                   task 3

// try {
//   function checkAge() {
//     let age = prompt("Age?");
//     if (age === "") {
//       throw new Error("The field is empty! Please enter your age");
//     }
//     if (isNaN(age)) {
//       throw new Error("It is not a number! Please enter your age");
//     }
//     if (age < 14) {
//       throw new Error("You are so young");
//     }
//     alert("You have access to movies");
//   }
// } catch (Err) {
//   console.log(Err.name);
//   console.log(Err.stack);
// }
// checkAge();

//
//                                                                                       task 4

// class MonthException {
//   constructor(message) {
//     this.MonthException = message;
//   }
//   showMonthName() {
//     try {
//       switch (this.MonthException) {
//         case 1:
//           console.log("January");
//           break;
//         case 2:
//           console.log("February");
//           break;
//         case 3:
//           console.log("March");
//           break;
//         case 4:
//           console.log("April");
//           break;
//         case 5:
//           console.log("May");
//           break;
//         case 6:
//           console.log("June");
//           break;
//         case 7:
//           console.log("July");
//           break;
//         case 8:
//           console.log("August");
//           break;
//         case 9:
//           console.log("September");
//           break;
//         case 10:
//           console.log("October");
//           break;
//         case 11:
//           console.log("November");
//           break;
//         case 12:
//           console.log("December");
//           break;
//         default:
//           throw new Error("MonthException Incorrect month number");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
// }
// let value = new MonthException(56);
// value.showMonthName();
