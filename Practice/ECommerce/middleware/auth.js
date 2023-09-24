const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async(req, res, next) => {
try {
  const token = req.header('Authorization').replace('Bearer ', '')
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })
if(!user) {
throw new Error
}
  req.token = token
  req.user = user
next()
} catch (error) {
res.status(401).send({error: "Authentication required"})
 }
}
module.exports = auth

//First, we require jwt and our user model. 
//We then try to get the token from the request header
//(this must have been sent from the frontend while making the request),
//if the token exists, we try to verify if it’s valid with jwt and
// if it does, we find the user using their ObectID and the token.

//If no user exists, we trigger the catch block else, we attach the 
//token and the user to the request object.