require('dotenv').config();
const jwt = require('jsonwebtoken');
const SK = process.env.JWT_SECRET;

const createToken = (payload) => {
    return jwt.sign(payload, SK)
}

const verifyToken = (token) => {
    return jwt.verify(token, SK)
}

module.exports = { createToken, verifyToken }