const express = require('express');
const server = express();
const sessionMiddleWare = require('./Src/Infrastructure/Session');

server.use(express.json())

server.use(sessionMiddleWare())

const c= require("./Src/Domain/Repository/UserRepository")

c.ConnectionToDataBase()
const MoviesController = require("./Src/Controller/MoviesController")
const RegisterController = require("./Src/Controller/RegisterController");
const LoginController = require("./Src/Controller/LoginController");


server.post('/',RegisterController)
server.post('/login',LoginController)
server.get("/movies",MoviesController)


server.listen(3000,()=>console.log("listenning"))