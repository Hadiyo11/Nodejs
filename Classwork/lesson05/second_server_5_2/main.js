"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();



app.on("request", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });

  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage);

  console.log(req.method); //log http method used
  console.log(req.url); //log the request URL
  console.log(req.headers); //log request headers
});

app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
