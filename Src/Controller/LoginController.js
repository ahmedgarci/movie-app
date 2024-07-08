const LoginUseCase = require("../UseCases/LoginUseCase")

module.exports = async(req,res)=>{
    const {email,password}= req.body
    try{
        let { UserId , username } = await LoginUseCase({email:email,password:password})
        
        req.session.user = UserId;
        
        return res.status(200).json({msg: `Welcome ${username}` })
    }
    catch(e){
        return res.status(422).json({msg:e.message})
    }


}