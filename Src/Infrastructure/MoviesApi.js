const fetch = require('node-fetch');

module.exports = class MoviesService{
    static options =  this.options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.Token
        }
    }
    
    static async GetMoviesData(){
        try{
            let data = await fetch(process.env.AllMoviesEndpoint,
           this.options)
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

    static async GetPopularMovies(){
        try{
            let data = await fetch(process.env.PopularMoviesEndpoint,
            this.options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: process.env.Token
            }})
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
