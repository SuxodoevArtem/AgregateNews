const jwt = require('jsonwebtoken');

const checkJWT = async (req, res, next) => {
    const token = req.headers.authorization;

    console.log('token');
    console.log(token);

    next();

}

module.exports = checkJWT;