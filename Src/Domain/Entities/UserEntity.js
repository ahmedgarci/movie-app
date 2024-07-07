
module.exports =  class User{
    username ;
    email;
    password;
    
    getEmail(){
        return this.email;
    }
    setEmail(newEmail){
        this.email = newEmail;
        return this;
    }

    getUsername(){
        return this.email;
    }
    setUsername(newUsername){
        this.email = newUsername;
        return this;
    }  

    getPassword(){
        return this.password;
    }

    setPassword(password){
        this.password=password;
        return this;
    }


   



}