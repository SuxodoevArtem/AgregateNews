const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkJWT = async (req, res, next) => {

    if(req.path.slice(0,4) == '/api'){
        if(req.path == '/api/news/createkey'){
            next();
        }
        console.log(req.path)
        next();
    }else{
        if(req.path == '/auth/login' || req.path == '/auth/signup'){
            next();
        }else{
            const token = req.headers.authorization;
    
            console.log('token');
            console.log(token);
        
            if(!token){
                return res.status(403).send({
                    message: 'Пользователь неавторизован'
                })
            }
        
            const user = jwt.verify(token, process.env.JWT_SECRET)
            req.user = user;
            next();
        }
    }

  

}

module.exports = checkJWT;