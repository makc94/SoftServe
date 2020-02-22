//                                                                                                       TASK_1
// let http = require("http");
// let os = require("os");
// let path = require("path");

// http
//   .createServer(function(request, response) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<h1>System information</h1>\n");
//     response.write("Current user name: " + os.userInfo().username + "<br>");
//     response.write("OS type: " + os.type() + "<br>");
//     response.write("System work time: " + os.uptime() / 60 + " minutes <br>");
//     response.write(
//       "Current work directory: " + path.dirname(__dirname) + "<br>"
//     );
//     response.write("Server file name: " + path.basename(__filename));
//     response.end();
//   })
//   .listen(5000);
// console.log("Server starting now...");
