# Blog_API

## Description
This is a blog API with full Create, Read, Update, and Delete(CRUD) functionality. 

### Tech Stack

Server: Node.js, Express.js
Database: MongoDB

### Environment Variables
To run this API the following environment vaariables are required:

MONGODB_URI
SECRET_KEY

### Run Locally

To run locally clone the following GitHub link and install the following dependecies.

### Endpoints

- /auth
        - login
            - CREATE
-/users
        - registration
            - CREATE
    - /blogs
        - full CRUD
            - CREATE
            - READ
            - READ BY ID
            - UPDATE
            - DELETE

### SCHEMAS

### Auth Schema:
email:type:String:required:true,
password:type:String:required:true


###  Blog Schema:
username: type: String, required: true
created_by: type: String, required: true,
created_at:type:String, required:true,
blog_title:type:String, required: true
private:type:Boolean,default false

### User Schema:
username:type:String,required:true,
email:type:String,required:true,
birthday:date,required:true,
age:number,
password:String:required:true