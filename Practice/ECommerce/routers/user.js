//routers handle all requests relevant to each model 

const express = require('express')
const User = require('../models/user')
//import user model to create new users
const router = new express.Router()

//we need a system to generate auth tokens everytime  new user
//registers or login

//signup
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }
    })