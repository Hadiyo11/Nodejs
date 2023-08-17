const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();
  //listen for requests
app.on("request", (req, res) => {
  var body = [];//hold chunk contents
  req.on("data", (bodyData) => {//process it in another callback fun
    body.push(bodyData);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
  });
  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Headers: ${getJSONString(req.headers)}`);
  //listens for requests
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  //prepares a response
  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage); //respond with html
});
app.listen(port);
console.log(`The server has started and is listening on port number: 
➥ ${port}`);
console.log(req.method); //log the http method used
console.log(req.url); //log the request url
console.log(req.headers); //log the request headers
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2); //convert the JS obj to string
};
