const express = require('express')
const{check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/usersSchema')

const router = express.Router()

//User Login

router.post('/',[
    check("email","Please provide a valid email").isEmail(),
    check("password", "Check your password!").notEmpty()
], async (req, res) => {
    const userData = req.body
    try {
       //Find the  user with the provided email 
       const user = await UserModel.findOne({email: userData.email})
       if (!user){
           return res.json('User not found!')
       }
       res.status(201).json({
           user:user
       })
    } catch {
        console.log(error)
        res.status(500).json('Server Error')
    }
})



module.exports = router