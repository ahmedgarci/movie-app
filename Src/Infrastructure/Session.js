const session = require("express-session");

module.exports  =()=>{
  return session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: {
         // secure: true , 
        maxAge:3600
      }
    })
  }


