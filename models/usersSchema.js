const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true

    },

    birthday: {
          type: Date,
          required: true
    },

    age: {
        type: Number
    },

    password:{
        type: String,
        required: true
}
})

module.exports = mongoose.model('User', userSchema)