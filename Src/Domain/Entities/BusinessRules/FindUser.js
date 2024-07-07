const UserRepository = require("../../Repository/UserRepository");

module.exports = async({property,value})=>{
    try{
        let user = await UserRepository.findUserByProperty({property:property,value:value});
        return user
    }catch(e){
        return e;
    }

}
