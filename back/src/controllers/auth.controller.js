const { GetUser, CreateUser } = require('../data/querys')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUp = async ( { body: {email, password } } , res) => {
    try{

        const foundUser = await GetUser(email);
        
        if(!foundUser){
            return res.status(403).send({
                message: "Такой email уже существует",
                err
            })
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        console.log(passwordHash);

        await CreateUser(email, passwordHash);

        return res.status(200).send({
            message: "Пользователь создан",
        })

    }catch(err){
        res.status(403).send({
            message: 'Ваш логин или пороль неподходят!'
        })
    }
}

const login = async ( { body: {email, password } }, res) => {
    try{

        const foundUser = await GetUser(email);
        console.log(bcrypt.compareSync(password, foundUser[0].users_password));

        if( bcrypt.compareSync(password, foundUser[0].users_password) ){
            res.status(200).send({
                message: 'Пользователь залогинин'
            })
        }else{
            res.status(403).send({
                message: 'Ваш логин или пороль неподходят!'
            })
        }

    }catch(err){
        res.status(403).send({
            message: 'Ваш логин или пороль неподходят!'
        })
    }
}

const logout = async (req, res) => {

}

module.exports = {
    signUp,
    login,
    logout
}