const express = require('express')
const server = express()
const c= require("./Src/Domain/Repository/UserRepository")

const x = require("./Src/UseCases/LoginUseCase");

server.get('/',async()=>{
    await c.ConnectionToDataBase();
//    let a = await x({username:"ahmed",email:"k@gmail.com",password:"aaaaaaaaaaaaa"})
//    let a = await x({username:"ahmed",email:"k@gmail.com",password:"aaaaaaaaaaaaa"})

}    
)


server.listen(3000,()=>console.log("listenning"))