const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    created_by: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    blogs_title:{
        type: String,
        required: true
    },

    blogs_content:{
        type: String,
        required: true
    },

     private: {
         type: Boolean,
         default: false,
        //  required: true
     },

     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
     }


})

module.exports = mongoose.model('Blogs', blogSchema)