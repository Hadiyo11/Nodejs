"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs"); //require fs module , allows server to acess and read index.html
const getViewUrl = (url) => {//set up route mapping for html files
  return `views${url}.html`;
};
http
  .createServer((req, res) => {
    let viewUrl = getViewUrl(req.url);//get the file-path string
    fs.readFile(viewUrl, (error, data) => {//read the contents of the mapped file
      if (error) {//handles error with a 404 response code
        res.writeHead(httpStatus.NOT_FOUND);
        res.write("<h1>FILE NOT FOUND</h1>");
      } else {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/html",
        });
        res.write(data);//respond with file contents
      }
      res.end();
    });
  })
  .listen(port);
console.log(`The server has started and is listening on port number:
   ➥ ${port}`);
