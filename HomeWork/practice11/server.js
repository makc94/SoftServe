let http = require("http");
let mod = require("./personalmodule.js");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Date of request: " + mod.myDateTime() + "<br>");
    res.write("" + mod.name());
    res.end();
  })
  .listen(8080);
console.log("Server working now!");
