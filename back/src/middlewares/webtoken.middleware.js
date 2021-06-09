const jwt = require('jsonwebtoken');

const checkJWT = async (req, res, next) => {
    const { header: { autorization } } = req;

    console.log(header);

    next();

}

module.exports = checkJWT;