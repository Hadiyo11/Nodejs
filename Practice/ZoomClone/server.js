'use strict'
const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const http = require(http)
const io = require('socket.io')(http)
const {ExpressPeerServer} = require('peer')
const url = require("url");
const peerServer = ExpressPeerServer(server, { // Here we are actually defining our peer server that we want to host
    debug: true,
});
const path = require("path")

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/peerjs', peerServer)

app.get('/',(req,res)=>{
    res.render('index')
})

app.get("/join", (req, res) => { // Our intro page redirects us to /join route with our query strings(We reach here when we host a meeting)
    res.redirect( // When we reach /join route we redirect the user to a new unique route with is formed using Uuid 
        url.format({ // The url module provides utilities for URL resolution and parsing.
            pathname: `/join/${uuidv4()}`, // Here it returns a string which has the route and the query strings.
            query: req.query, // For Eg : /join/A_unique_Number?Param=Params. So we basically get redirected to our old_Url/join/id?params
        })
    );
});

app.get("/join/:rooms", (req, res) => { // When we reach here after we get redirected to /join/join/A_unique_Number?params
    res.render("room", { roomid: req.params.rooms, Myname: req.query.name }); // we render our ejs file and pass the data we need in it
}); // i.e we need the roomid and the username

io.on("connection", (socket) => { // When a user coonnects to our server
    socket.on("join-room", (roomId, id, myname) => { // When the socket a event 'join room' event
        socket.join(roomId); // Join the roomid
        socket.to(roomId).broadcast.emit("user-connected", id, myname);// emit a 'user-connected' event to tell all the other users
        // in that room that a new user has joined

        socket.on("messagesend", (message) => { 
            console.log(message);
            io.to(roomId).emit("createMessage", message);
        });

        socket.on("tellName", (myname) => {
            console.log(myname);
            socket.to(roomId).broadcast.emit("AddName", myname);
        });

        socket.on("disconnect", () => { // When a user disconnects or leaves
            socket.to(roomId).broadcast.emit("user-disconnected", id);
        });
    });
});

app.listen(3000,()=>{
    console.log('App is listening on port 3000')
})