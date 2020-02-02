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
