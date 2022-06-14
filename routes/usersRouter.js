const express = require('express')
const UserModel = require('../models/usersSchema')
//pulls out the two functions we need from express validaor
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Create a Router
const router = express.Router()

//Create or Register a new User
router.post('/', async (req, res) => {
const userData = req.body
//Write the user to the db
try {
    const user = await UserModel.create(userData)
    res.status(201).json({
        user:user
    })
} catch (error) {
    console.log(error)
    res.status(400).json('Bad request!!!')
    
}

// const errors = validationResult(req)
// //Checks for validation errors
// if(!errors.isEmpty(){
//     return res.json(errors.array())
}
)

module.exports = router