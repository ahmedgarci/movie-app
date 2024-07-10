
const RegisterUseCase = require('../UseCases/AuthUseCases/RegisterUseCase')

module.exports = async(req,res)=>{

    const {username,email,password} = req.body;
    try{

        let userInfo  =  await RegisterUseCase({username:username,email:email,password:password})
        
        return res.status(200).json({msg:" Registred successfully ! ",userInfo})

    }catch(e){
        
        return res.status(400).json({msg: e.message})
    
    }
}