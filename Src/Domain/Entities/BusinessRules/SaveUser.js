const UserRepository =require("../../Repository/UserRepository")

module.exports = async({username,email,password})=>{
    try{
        let userId = await UserRepository.SaveNewUser({username,email,password})
        return userId;
    }catch(e){
        return e;
    }
}
