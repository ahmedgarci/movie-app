
module.exports = ({username,email,password})=>{
    try{

        if(username.trim().length === 0){ throw new Error("Enter a valid username")} 
        if(email.trim().length === 0 || email.indexOf("@") === -1 ){ throw new Error("Enter a valid email")} 
        if(password.trim().length < 8){ throw new Error("Password must contains at least 8 chars")} 
    }catch(e){
        throw new Error (e.message)
    }
 

}