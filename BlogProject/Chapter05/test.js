"use strict";

const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
//mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser:true})

// BlogPost.create(
//   {
//     title: "The Mythbuster Guide to Saving Money on Energy Bills",
//     body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:",
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// BlogPost.find({}, (error, blogpost) => {
//     console.log(error, blogpost)
// }); 

// BlogPost.find({
//     title:/Money/
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// });


var id = "64ff6116846fc527dc05d891";

BlogPost.findById(id, (error, blogpost) => {
    console.log(error, blogpost)
}); 

/* BlogPost.findByIdAndUpdate(id, {
    title: 'Updated Title'
}, (error, blogpost) => {
    console.log(error, blogpost)
}); */

// BlogPost.findByIdAndDelete(id, (error, blogpost) => {
//     console.log(error, blogpost)
// });