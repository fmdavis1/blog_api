const express = require('express')
const UserModel = require('../models/usersSchema')
//pulls out the two functions we need from express validaor
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Create a Router
const router = express.Router()

//Get Users
router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        
    }
})

//Create or Register a new User
router.post('/',[
    check('username', "Username is required from Middleware!").notEmpty(),
    check("email", "Please use a valid email from middleware").isEmail(),
    check("password","Please enter a password").notEmpty(),
    check("password","Please enter a password with six or more characters.").isLength({min: 6}),
], async (req, res) => {
const userData = req.body

//Checks for validation errors
const errors = validationResult(req)
if(!errors.isEmpty()){
    return res.json(errors.array())
}
//Write the user to the db
try {
    //checking if there is a user with this email in the db
    const userExist = await UserModel.findOne({email: userData.email})
    //if user exist we return!
    if(userExist){
        return res.json({msd: "User already exists!"})
    }

    //*========Create a New User
    // 1 Create the salt
    const SALT = await bcrypt.genSalt(12)
    // 2 Use the salt to creat a hash with the user's password
    const hashedPassword = await bcrypt.hash(userData.password, SALT)
    // 3 Assign the hashed password to the userData
    userData.password = hashedPassword
    //Write the user to the db
    const user = await UserModel.create(userData)

    //create a new JWT Token

    const payload = {
        id: user._id,
        email: user.email
    }
    const TOKEN = jwt.sign(payload, process.env.SECRET_KEY)

    res.status(201).json({
        user:user,
        token:TOKEN
    })
} catch (error) {
    console.log(error)
    res.status(400).json('Bad request!!!')
    
}

})

//Update User By Id
router.put('/:id', async(req, res) => {
    const id = req.params.id
    newUsersData = req.body
    try {
        //find the user by id
        const user = await UserModel.findByIdAndUpdate(id, newUsersData, {new: true})
        res.status(202).json(user)
        console.log(user)
    } catch (error){
        console.log(error)

    } 
        
    })

    //Delete a User
    router.delete('/:id', async(req, res) => {
        const id = req.params.id
        console.log('FROM DELETE', req.user)
        try{
            //first we find the user we're going to delete
            const user = await UserModel.findByIdAndDelete(id)
            res.status(200).json({msg:'user was deleted!'})
            
        }catch(error){
            console.log(error)
        }
    })

module.exports = router