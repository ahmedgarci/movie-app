const bcrypt = require('bcrypt')

module.exports = async(password,HashedPassword)=>{
    return bcrypt.compareSync(password,HashedPassword)
}
