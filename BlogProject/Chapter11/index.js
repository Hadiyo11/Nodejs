const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware =
require('./middleware/redirectIfAuthenticatedMiddleware')

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const storeUserController = require('./controllers/storeUser')
const newUserController = require('./controllers/newUser')
const getPostController = require('./controllers/getPost')
const validateMiddleware = require("./middleware/validateMiddleware");
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

const app = new express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(fileUpload());
app.use(expressSession({
    secret: 'keyboard cat'
    }))
app.use(express.json())
app.use(express.urlencoded())

global.loggedIn = null;
app.use("*", (req, res, next) => {
loggedIn = req.session.userId;
next()
});

app.use('/posts/store', validateMiddleware)

const BlogPost = require('./models/BlogPost.js')

mongoose.connect('mongodb://127.0.0.1/my_database',
    { useNewUrlParser: true })

app.get('/posts/new',authMiddleware, newPostController)
app.get('/', homeController)
app.get('/post/:id', getPostController)
app.get('/auth/register', newUserController)
app.get('/auth/login', loginController)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.get('/auth/logout', logoutController)
app.use((req, res) => res.render('notfound'));

app.post('/posts/store',authMiddleware, storePostController)
app.post('/users/register', storeUserController)
app.post('/users/login', loginUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware,
storeUserController)
app.post('/users/login',redirectIfAuthenticatedMiddleware, loginUserController)

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

//pg 107