// let mentor = {                                                                                  // task 1
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
//   result: function propsCount() {
//     return this.duration;
//   }
// };
// console.log(mentor.result());

// let pen = {                                                                                 // task 2  variant 1
//   color: "red",
//   weight: 10,
//   lenght: 25,
//   age: 1,
//   size: "middle"
// };

// function showProps() {
//   let res = Object.assign(pen);
//   console.log(res);
// }
// showProps();

// let pen = {                                                                                          // task 2   variant 2
//   color: "red",
//   weight: 10,
//   lenght: 25,
//   age: 1,
//   size: "middle",
//   showMeProps: function showProps() {
//     let a = this.color;
//     let b = this.weight;
//     let c = this.lenght;
//     let d = this.age;
//     let e = this.size;
//     let arr = [a, b, c, d, e];
//     console.log(arr);
//     console.log(Object.getOwnPropertyNames(pen));
//   }
// };

// pen.showMeProps();

                                                                                        // task 3
// class Worker {
//   constructor(fullName, dayRate, workingDays, newExp) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//     this.newExp = newExp;
//   }

//   #experience = 1.2;

//   get newExp() {
//     return this._newExp;
//   }
//   set newExp(no) {
//     if (no == 1.5) {
//       this._newExp = no;
//     } else {
//       //console.log("g");
//     }
//   }

//   cloneValue() {
//     let clone = this.#experience;
//     return clone;
//   }

//   showSalary() {
//     let salary = this.dayRate * this.workingDays;
//     return salary;
//   }

//   showSalaryWithExperience() {
//     let salaryWithExperience = this.showSalary() * this.cloneValue();
//     //console.log("Зарплата з коефіцієнтом =", salaryWithExperience);
//     return salaryWithExperience;
//   }

//   newSalary() {
//     let salary = this.showSalary() * exp.newExp; // 1.5 беру ззовні класу
//     return salary;
//   }

//   lastTask (){
//     let lastTask = this.fullName + ": " + this.showSalary();
//     return lastTask;
//   }
// }

// let worker1 = new Worker("Makc Lantukh: ", 500, 22);
// console.log(worker1.fullName);
// console.log(worker1.fullName, "salary: ", worker1.showSalary());
// console.log("New experience: ", worker1.cloneValue());
// console.log(worker1.fullName, "salary: ", worker1.showSalaryWithExperience());
// let exp = new Worker();
// exp.newExp = 1.5;
// console.log("New experience: ", exp.newExp); //3
// console.log(worker1.fullName, "salary: ", worker1.newSalary());
// console.log('------------')

// let worker2 = new Worker("Andry Petersen: ", 450, 20);
// console.log(worker2.fullName);
// console.log(worker2.fullName, "salary: ", worker2.showSalary());
// console.log("New experience: ", worker2.cloneValue());
// console.log(worker2.fullName, "salary: ", worker2.showSalaryWithExperience());
// let exp2 = new Worker();
// exp2.newExp = 1.5;
// console.log("New experience: ", exp2.newExp); //3
// console.log(worker2.fullName, "salary: ", worker2.newSalary());
// console.log('------------')

// let worker3 = new Worker("Kiril Lavanda: ", 660, 15);
// console.log(worker3.fullName);
// console.log(worker3.fullName, "salary: ", worker3.showSalary());
// console.log("New experience: ", worker3.cloneValue());
// console.log(worker3.fullName, "salary: ", worker3.showSalaryWithExperience());
// let exp3 = new Worker();
// exp3.newExp = 1.5;
// console.log("New experience: ", exp3.newExp); //3
// console.log(worker3.fullName, "salary: ", worker3.newSalary());
// console.log('------------')

// let one = worker1;
// let two = worker2;
// let three = worker3;

// let arr = [one, two, three];

// arr.sort(function(a, b) {
//     return a.showSalary() - b.showSalary();}
// )

// for (let i =0; i < arr.length; i++){
//     console.log(arr[i].fullName + '' + arr[i].showSalary());
//     }

                                                                                  // task 4
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + this.surname);
  }
}
class Student extends Person {
  constructor(name, surname, middleName, year) {
    super(name, surname);
    this.middleName = middleName;
    this.year = year;
  }
  showFullName() {
    return this.name + this.surname + this.middleName;
  }
  showCourse() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let macLan = new Student("Makc ", "Lantukh ", "Victorovich ", 2017);
console.log(macLan.showFullName());
console.log("Current course: " + macLan.showCourse());

                                                                                  // task 5
class GeometricFigure {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigure {
  constructor(a, b) {
    super(a, b);
  }
  getArea() {
    let area = this.a * this.b * 0.5;
    return area;
  }
}
class Square extends GeometricFigure {
  constructor(a) {
    super(a);
  }
  getArea() {
    let area = this.a ** 2;
    return area;
  }
}
class Circle extends GeometricFigure {
  constructor(a) {
    super(a);
  }
  getArea() {
    let area = Math.PI * this.a ** 2;
    return area;
  }
}
let triangle = new Triangle(4, 5);
let square = new Square(7);
let circle = new Circle(5);

function sumArea() {
  let result = triangle.getArea() + square.getArea() + circle.getArea();
  return result;
}
let figures = [triangle, square, circle];
function handleFigures(figure) {
  for (let i = 0; i < figures.length; i++) {
    let res = figures[i];
    if (res instanceof GeometricFigure);
    {
      console.log("Geometric figure: ", res, "- area ", figures[i].getArea());
    }
  }
}

handleFigures();
console.log("Total area: ", sumArea());
