const express = require('express')
const BlogsModel = require('../models/blogsSchema')
const authMiddleware = require('../middleware/authMiddleware')


//Create a Router
const router = express.Router()

//Get Blogs
router.get('/',authMiddleware, async(req, res) => {
    try {
        const blogs = await BlogsModel.find()

        res.status(200).json(blogs)
    } catch (error) {
           console.log(error)
        
    }
})
router.get('/private',authMiddleware, async(req, res) => {
    try {
        const blogs = await BlogsModel.find({private: true})

        res.status(200).json(blogs)
    } catch (error) {
           console.log(error)
        
    }
})

//Create Blogs
router.post('/', authMiddleware, async (req, res) => {
    const blogsData = req.body //gets the data from the request
    blogsData.user = req.user.id
    console.log(blogsData);
    try {
        const blog = await BlogsModel.create(blogsData)
        //create the blog in the db
        //send back the response
        res.status(201).json(blog)
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!')
        
    }

})

    //Get Blog by ID

    router.get('/:id',authMiddleware, async(req, res) => {
        const id = req.params.id
        console.log(id)

        try {
            const blog = await BlogsModel.findById(id)
            res.status(200).json(blog)
        } catch (error) {
            console.error(error)
            res.status(400).json({
                msg: 'Id not found'
            })
            
        }
    })

    //Update Blog By ID
    router.put('/:id', authMiddleware, async(req, res) => {
        const id = req.params.id
        const newBlogsData = req.body
        try {
            //find the blog by id
            const blog = await BlogsModel.findByIdAndUpdate(id, newBlogsData, {new: true})
            res.status(202).json(blog)
        } catch (error) {
            console.log(error)
            
        }
    })

    //Delete a Blog
    router.delete('/:id', authMiddleware, async (req, res) => {
        const id = req.params.id
        console.log('FROM DELETE', req.user)
        try {
            //first we find the blog we're going to delete
            const blogToDelete = await BlogsModel.findById(id)
            console.log(blogToDelete)
            console.log(blogToDelete.user._id.toString(),'||', req.user.id)
            //Here we check that the user who created the blog is the one asking to delete the blog
            //By checing the ID's

            if(blogToDelete.user._id.toString() !== req.user.id){
                //if they are NOT the same we send error message
                return res.status(400).json({msg:'Not Authorized!'})
            }

            // if they are the same ID's we delete itconst blog
            const blog = await BlogsModel.findByIdAndDelete(id)
            res.status(200).json({msg:'Blog was deleted!'})
        } catch (error) {
            console.log(error)
        }

    })

    module.exports = router


