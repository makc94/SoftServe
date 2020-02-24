//                                                                      Запис та відправка з localStorage
if (navigator.onLine) {
  console.log("+++");
  send.addEventListener("click", send_data2);
  clear.addEventListener("click", clear_value);
  send.addEventListener("click", clear_value);
  //                                                                    Вичитування з localStorage
  let name = document.getElementById("name");
  name.value = localStorage.getItem("name");
  //
  let last_name = document.getElementById("last_name");
  last_name.value = localStorage.getItem("last_name");
  //
  let age = document.getElementById("age");
  age.value = localStorage.getItem("age");

  //
  let education = document.getElementById("education");
  education.value = localStorage.getItem("education");
  //
  let position = document.getElementById("position");
  position.value = localStorage.getItem("position");
  //
  
} else {
  console.log("---");
  send.addEventListener("click", send_data);
  clear.addEventListener("click", clear_value);
  //
  let name = document.getElementById("name");
  name.value = localStorage.getItem("name");
  name.oninput = function() {
    localStorage.setItem("name", name.value);
  };
  //
  let last_name = document.getElementById("last_name");
  last_name.value = localStorage.getItem("last_name");
  last_name.oninput = function() {
    localStorage.setItem("last_name", last_name.value);
  };
  //
  let age = document.getElementById("age");
  age.value = localStorage.getItem("age");
  age.oninput = function() {
    localStorage.setItem("age", age.value);
  };
  //
  let education = document.getElementById("education");
  education.value = localStorage.getItem("education");
  education.oninput = function() {
    localStorage.setItem("education", education.value);
  };
  //
  let position = document.getElementById("position");
  position.value = localStorage.getItem("position");
  position.oninput = function() {
    localStorage.setItem("position", position.value);
  };
}

function clear_value() {
  localStorage.removeItem("name");
  name.value = "";
  localStorage.removeItem("last_name");
  last_name.value = "";
  localStorage.removeItem("age");
  age.value = "";
  localStorage.removeItem("education");
  education.value = "";
  localStorage.removeItem("position");
  position.value = "";
}

function send_data() {
  alert("Дані не відправлені, але записані у localStorage!");
}

function send_data2() {
  alert("Дані відправлені на сервер!");
}

//                                                                      Перевірка підключення до ІНТЕРНЕТУ
function check_connection() {
  let connection = navigator.onLine;
  if (connection) {
    alert("Підключення до інтернету є!");
  } else {
    alert("Підключення до інтернету відсутнє!");
  }
}
check.addEventListener("click", check_connection);

//
function perev() {
  let str = document.getElementById("age").value;
  let regexp = /\d{2}/;
  let res = regexp.test(str);
  console.log(res);
}
