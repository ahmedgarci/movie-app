

const {FindUser} = require('../Domain/Entities/BusinessRules/index')
const ComparePasswordsBcrypt = require("../Infrastructure/ComparePasswordsBcrypt");

module.exports = async({email,password})=>{
    try{
        let UserExists = await FindUser({property:"email",value:email})

        if(!UserExists){throw new Error(" user does not exist with that email")}
        
        let isCorrect = ComparePasswordsBcrypt(password,UserExists.password)
        
        if(!isCorrect){throw new Error (" invalid credentials")}

        return UserExists.id

    }catch(e){
        throw e
    }


}