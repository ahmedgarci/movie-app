const {FindUser,CheckValidCredentials,SaveUser} = require('../Domain/Entities/BusinessRules/index')
const HashedPassword = require("../Infrastructure/HashPassword");

module.exports = async({username,email,password})=>{
    try{

        CheckValidCredentials({username:username,email:email,password:password})

        let UserExists = await FindUser({property:"email",value:email})

        if(UserExists !== null){throw new Error (" user already exists with that email ")}
        
        let newPassword = HashedPassword(password); 

        let UserInfo = await SaveUser({username:username,email:email,password:newPassword})    

        return UserInfo;

    }catch(e){
        throw new Error (e.message)
    }


}