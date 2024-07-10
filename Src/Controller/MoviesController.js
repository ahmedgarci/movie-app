const {GetMoviesDataUseCase,GetPopularMoviesUseCase} = require('../UseCases/MoviesUseCases/GetAllMoviesUseCase');

module.exports ={
    GetMoviesDataController : 
    async(req,res)=>{
        try{
            let movies = await GetMoviesDataUseCase(); 
            return res.status(200).json({movies})
    
        }catch(e){
            return res.json({msg:e.message})
        }
    },
    GetPopularMoviesController:
        async(req,res)=>{
            try{
                let popular = await GetPopularMoviesUseCase(); 
                return res.status(200).json({popular})
            }catch(e){
                return res.json({msg:e.message})
            }
        },

} 

