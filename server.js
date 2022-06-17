const express = require('express')
const mongoConfig = require('./config/mongoConfig')
const blogsRouter = require('./routes/blogsRouter')
const usersRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')
require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()
const PORT = process.env.PORT || 5000

//Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//Routers
app.use('/auth', authRouter)
app.use('/blogs', blogsRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    mongoConfig()
})