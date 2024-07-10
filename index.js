const express = require('express');
const server = express();
const sessionMiddleWare = require('./Src/Infrastructure/Session');
require("dotenv").config({path:"./.env"})

server.use(express.json())

server.use(sessionMiddleWare())

const UserRepository= require("./Src/Domain/Repository/UserRepository")

UserRepository.ConnectionToDataBase()

const {GetMoviesDataController,GetPopularMoviesController} = require("./Src/Controller/MoviesController")
const RegisterController = require("./Src/Controller/RegisterController");
const LoginController = require("./Src/Controller/LoginController");


server.post('/register',RegisterController)
server.post('/login',LoginController)
server.get("/movies",GetMoviesDataController)
server.get("/popular",GetPopularMoviesController)


server.listen(3000,()=>console.log("listenning"))