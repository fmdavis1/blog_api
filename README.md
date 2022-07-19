# BLOG_API

## Description
This is a blog API with full Create, Read, Update, and Delete(CRUD) functionality. 

### Tech Stack

- Server: Node.js, Express.js
- Database: MongoDB
- Frontend: Postman
- Deploy: Heroku

### ENVIONMENT VARIABLES
To run this API the following environment vaariables are required:

- MONGODB_URI
- SECRET_KEY

### RUN LOCALLY
Clone the project and follow all steps and have all dependencies to run the project locally.

git clone https://github.com/fmdavis1/blog_api

### Install dependencies

 npm init -y

 npm i:

- bcrypt
- dotenv
- express
- helmet
- jsonwebtoken
- mongoose
- morgan

### ROUTES
- Endpoints, Parameters, Schema

### Endpoints

- To run use Port 5000 as follows: http://localhost:5000 and add endpoints

- server app.get('/')return message "Server is running"

- usersRouter.post('/auth'): Creates Login.Login with username and password only. Token is sent to header for furher access.
- /auth
        - Login
            - CREATE

- usersRouter.post('/users')Registers users, usersSchema is used. Password is hashed. Token sent to headers for further access.
- /users
        - CREATE
            - Registration
        - READ
            - Get users
        - UPDATE
            - Update user
        - DELETE
            - Delete user
        

Blog('/blogs')
router.get('/blogs'): all public blog and private blogs are included, must be logged in and have a token.

router.post('/blogs'): Creates Blog with blogsSchema. Must have a token

router.put('/blogs/:id'): Updates blog with id, parameter(String) id is needed to update blog. Must have a token

router.get('/blogs/:id'): Returns blog associcated to id, parameter(String) id is required to find blog. Only blog associated with id appears. Must have a token

router.get('/blogs/private'): Returns blog associcated to private. Onlyprivate blogs appear where the value to the key of private in the blogsSchema is set to true.

router.delete('/blogs/:id): Deletes blog associated with id, need a token for Authorization and parameter(string) id is required to delete blog


- /blogs
    - full CRUD
        - CREATE
            -Create blog
        - READ
            - Get blogs
            - Get private blogs
        - READ BY ID
            - Get blog by id
        - UPDATE
            - Update blog
        - DELETE
            -Delete blog

### SCHEMAS

###  Blog Schema:
- username: type: String, required: true
- created_by: type: String, required: true,
- created_at:type:String, required:true,
- blog_title:type:String, required: true
- private:type:Boolean,default false

### User Schema:
- username:type:String,required:true,
- email:type:String,required:true,
- birthday:date,required:true,
- age:number,
- password:String:required:true

### Deploy
- Deployed to Heroku