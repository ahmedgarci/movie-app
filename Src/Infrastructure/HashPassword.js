const bcrypt = require('bcrypt');

module.exports=(password)=>{
    let HashedPassword = bcrypt.hashSync(password,12);
    return HashedPassword;
}
