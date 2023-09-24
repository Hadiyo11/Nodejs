const express = require('express')
const app = express()
const userRouter = require('./routers/user')
const itemRouter =require('./routers/item')
const cartRouter = require('./routers/cart')
const mongoose = require('mongoose')

app.use(express.static('public'))
app.use(express.json())
app.use(userRouter)
app.use(itemRouter)
app.use(cartRouter)

// const publicDirectory = path.join(__dirname, '../public')
// app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(4000, () => {
    console.log("App listening on port 4000");
  });