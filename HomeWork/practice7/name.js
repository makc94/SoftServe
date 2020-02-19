//===================================================== task_1
// let openTab = window.open("", "", "width=300,height=300");

// function changeSize() {
//   openTab.resizeTo(500, 500);
// }
// window.setTimeout(changeSize, 2000);
// function replace() {
//   openTab.moveTo(200, 200);
// }
// window.setTimeout(replace, 4000);

// function close() {
//   openTab.close();
// }
// window.setTimeout(close, 6000);

//=========================================================================================task_2
// function changeCSS() {
//   document.getElementById("text").style.fontStyle = "italic";
//   document.getElementById("text").style.color = "orange";
//   document.getElementById("text").style.fontSize = "20px";
//   document.getElementById("text").style.fontFamily = "Comic Sans MS";
// }

// =====================================================================task_3
// document.body.style.background = "yellow";

// function pageBlue() {
//   document.body.style.backgroundColor = "blue";
// }

// function doubleClick() {
//   document.body.style.backgroundColor = "pink";
// }

// function mouseDown() {
//   document.body.style.backgroundColor = "brown";
// }

// function mouseUp() {
//   document.body.style.backgroundColor = "white";
// }

// function mouseover() {
//   document.body.style.backgroundColor = "yellow";
// }

// function mouseout() {
//   document.body.style.backgroundColor = "white";
// }
// page.addEventListener("mouseover", mouseover);
// page.addEventListener("mouseout", mouseout);

//===============================================================================================task_4
// function clickOn() {
//   let x = document.getElementById("list");
//   x.remove(x.selectedIndex);
// }

// ===============================================================================================task_5
// function moveMo() {
//   document.getElementById("one").innerHTML += "Mouse on me!<br>";
// }
// function click() {
//   document.getElementById("one").innerHTML += "I was pressed!<br>";
// }
// function out() {
//   document.getElementById("one").innerHTML += "Mouse is not on me!<br>";
// }
// button.addEventListener("mouseover", moveMo);
// button.addEventListener("click", click);
// button.addEventListener("mouseout", out);

// ===================================================================================================task_6
// function sizesize() {
//   let res =
//     "Width : " + window.innerWidth + ", " + "Height : " + window.innerHeight;
//   document.getElementById("size").innerHTML = res;
// }
// sizesize();
// window.addEventListener("resize", sizesize);

// ==================================================================================================task_7
// function ukraine() {
//   console.log("hi");
// }
// let x = document.getElementById("country")[0][0];
// console.log(x);
// x.addEventListener("click", ukraine);






===========================================task_7
let ukr = ["Lviv", "Kyiv", "Odesa", "Kharkiv"];
let usa = ["Washington", "New York", "Chicago", "Dallas"];
let germany = ["Berlin", "Frankfurt", "Hannover", "Bonn"];

function show_cities() {
  let city = document.getElementById("2");
  city.innerHTML = "";
  let country = [];
  if (this.value == "1") {
    country = ukr;
  } else if (this.value == "2") {
    country = usa;
  } else if (this.value == "3") {
    country = germany;
  }
  for (let i = 0; i < country.length; i++) {
    let option = document.createElement("option");
    option.value = i + 1;
    let textNode = document.createTextNode(country[i]);
    option.appendChild(textNode);
    city.appendChild(option);
  }
}

function write() {
  console.log(this.value)
}

document.getElementById("1").addEventListener("change", show_cities);
document.getElementById("1").addEventListener("change", write);

