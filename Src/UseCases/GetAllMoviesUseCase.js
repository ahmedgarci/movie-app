const MoviesService =require('../Infrastructure/MoviesApi');

module.exports = async()=>{
    try{
       let movies =  await MoviesService.GetMoviesData();
       return movies;

    }catch(e){
        throw new Error(e.message);
    } 

}