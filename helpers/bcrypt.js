const bcryptjs = require('bcryptjs')

const hashPassword = (password) => {
    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(password, salt);
    return hash
}

const comparePassword = (password, hashedPass) => {
    return bcryptjs.compareSync(password, hashedPass);
}

module.exports = {
    hashPassword,
    comparePassword
}

