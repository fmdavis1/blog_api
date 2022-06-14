const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    created_by: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        required: true
    },

    blog_title:{
        type: String,
        required: true
    },

    blog_content:{
        type: String,
        required: true
    },

     private: {
         type: Boolean,
         default: false,
         required: true
     }


})
