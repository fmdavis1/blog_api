const express = require('express')
const BlogsModel = require('../models/blogsSchema')

//Create a Router
const router = express.Router()

//Get Blogs
router.get('/', async(req, res) => {
    try {
        const blogs = await BlogsModel.find()
        res.status(200).json(blogs)
    } catch (error) {
           console.log(error)
        
    }
})

//Create Blogs
router.post('/', async (req, res) => {
    const blogsData = req.body //gets the data from the request
    console.log(blogsData);
    try {
        const blog = await BlogsModel.create(blogsData)//create the blog in the db
        //send back the response
        res.status(201).json(blog)
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!')
        
    }

})

    //Get Blog by ID

    router.get('/:id', async(req, res) => {
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
    router.put('/:id', async(req, res) => {
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
    router.delete('/:id', async (req, res) => {
        const id = req.params.id
        try {
            const blog = await BlogsModel.findByIdAndDelete(id)
            res.status(200).json({msg:'Blog was deleted!'})
        } catch (error) {
            console.log(error)
        }

    })

    module.exports = router


