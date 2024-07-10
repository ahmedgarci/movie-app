const MySqlClient = require("mysql");

module.exports =  class UserRepository{
    DatabaseConnection=null;
    static async ConnectionToDataBase(){
        try{
            this.DatabaseConnection = await MySqlClient.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : '0000',
                database : 'movieapp'
            })
            this.DatabaseConnection.connect();
            console.log("connection established");
        }catch(error){
            throw "Failed to connect";
            this.DatabaseConnection.end();
        }
    }

    static async findUserByProperty({property,value}){
        let SQL = `SELECT * FROM USERS WHERE ?? = ?`;
        try{
            const users =  await new Promise((resolve,reject)=>{
                this.DatabaseConnection.query(SQL,[property,value],(err,results)=>{
                    if(err){reject(err);}
                    if(results){resolve(results)}
                })  
            }) 
            if(users.length > 0){
                return users[0]
            }
            return null;
        }catch(e){
            throw new Error(" error while fetching from database ")
        }
        
    }  
    
    static async SaveNewUser({username,email,password}){
        let SQL = `INSERT INTO USERS (username,email,password) VALUES ( ? ,? , ?);` ;
        try{
            await this.DatabaseConnection.query(SQL,[username,email,password]);
                        let LastIdSQL = 'Select last_insert_id() ;'
                    let result =  await new Promise((resolve,reject) => {
                        this.DatabaseConnection.query(LastIdSQL,(err,results)=>{
                        if(err){return reject (err)}
                        resolve(results)
                        })
                    });
                    return {
                        id:Object.values(result[0])[0],
                        username:username,
                        email:email
                        };

        }catch(e){throw new Error("error while saving ths user")}
    
    }  



}