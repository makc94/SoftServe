exports.myDateTime = function() {
  return Date();
};

let os = require("os");

exports.name = function() {
  var d = new Date();
  let hour = d.getHours();
  if (hour > 16) {
    return "Good evening, " + os.userInfo().username;
  } else if (hour > 8) {
    return "Good morning, " + os.userInfo().username;
  } else if (hour > 0) {
    return "Good night, " + os.userInfo().username;
  }
};
