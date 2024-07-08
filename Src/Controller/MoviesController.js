const GetAllMoviesUseCase = require('../UseCases/GetAllMoviesUseCase');

module.exports = async(req,res)=>{
    try{
        let movies = await GetAllMoviesUseCase(); 
        return res.status(200).json({movies})

    }catch(e){
        return res.json({msg:e.message})
    }
}