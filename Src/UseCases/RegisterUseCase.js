const {FindUser,CheckValidCredentials,
    HashedPassword,SaveUser} = require('../Domain/Entities/BusinessRules/index')

module.exports = async({username,email,password})=>{
    try{
        CheckValidCredentials({username,email,password})

        let UserExists = await FindUser({property:"email",value:email})

        if(UserExists){throw new Error (" user already exists with that email ")}

        let newPassword = HashedPassword(password); 

        let UserInfo = await SaveUser({username:username,email:email,password:newPassword})    

        return UserInfo;

    }catch(e){
        return e
    }


}