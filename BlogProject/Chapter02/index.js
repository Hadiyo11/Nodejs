"use strict";

//page 27
// const express = require('express')//require express module
// const app = express()//calls express func to start new express app
// app.listen(3000,()=>{
//     console.log("App listening on port 3000")
// })

//Page 28
// const express = require('express')//require express module
// const app = express()//calls express func to start new express app
// app.listen(3000,()=>{
//     console.log("App listening on port 3000")
// })

// app.get('/about',(req, res)=>{
//     res.json({//return a json respond back to the browser with res.json
//         name: 'Greg Lim'
//     })
// })

//Page 29
const express = require("express"); //require express module
const path = require("path"); //helps to get specific path to file
const app = express(); //calls express func to start new express app

//if we want to include static files like fonts and css with express
app.use(express.static('public'))
//app.use increases functionality with express
//by addin a function to our app's middlewar stack

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get('/about',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'contact.html'))
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
  });