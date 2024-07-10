const MoviesService =require('../../Infrastructure/MoviesApi');

module.exports = {
    
    GetMoviesDataUseCase : async()=>{
        try{
            let movies =  await MoviesService.GetMoviesData();
            return movies;
        }catch(e){
            throw new Error(e.message);
        } 
    },


    GetPopularMoviesUseCase:
        async()=>{
            try{
                return await MoviesService.GetPopularMovies();
            }catch(e){
                throw new Error(e.message);
            } 
        }
    
}