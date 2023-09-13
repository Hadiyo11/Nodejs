const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");
const BlogPost = require('./models/BlogPost.js')
const mongoose = require('mongoose');
//mongodb://127.0.0.1:27017/bezkoder_db
//mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser:true})

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "public/pages/index.html"));
    res.render("index");
});

app.get("/about", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "public/pages/about.html"));
  res.render("about");
});
app.get("/contact", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "public/pages/contact.html"));
  res.render("contact");
});
app.get("/post", (req, res) => {
// res.sendFile(path.resolve(__dirname, "public/pages/post.html"));
  res.render("post");
});
 
app.get('/posts/new',(req, res)=>{
  res.render('create')
})

// app.post('/posts/store',(req,res)=>{
//   console.log(req.body)
//   res.redirect('/')
//   })

app.post('/posts/store',(req,res)=>{
  // model creates a new doc with browser data
  BlogPost.create(req.body,(error,blogpost) =>{
  res.redirect('/')
  })
  })

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
