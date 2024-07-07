const express = require('express')
const server = express()
const c= require("./Src/Domain/Repository/UserRepository")
server.use(express.json())
c.ConnectionToDataBase()

const RegisterController = require("./Src/Controller/RegisterController");

server.post('/',RegisterController)


server.listen(3000,()=>console.log("listenning"))