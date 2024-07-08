const fetch = require('node-fetch');

module.exports = class MoviesService{

    
    static async GetMoviesData(){
        try{
            let data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
            this.options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTliMmUzNzBhNWM5YWYxZDg5NTY1OTRkZTEwNTg1ZSIsIm5iZiI6MTcyMDQ1MDgyMC45NzgyNDEsInN1YiI6IjY2OGJmZGZmZmRkNDE3YmI3YmVhZWE4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZNlKMQp46gezFF3DC6uqKmr6WyKZOqBM1uZG6CQARk0'
                }
            })
            .then(res => res.json())
            .then(json => {return json})
            .catch(err =>{

                 throw new Error(err)
            });
            return data

        }catch(e){
            throw new Error (e.message)
        }
    }





}
