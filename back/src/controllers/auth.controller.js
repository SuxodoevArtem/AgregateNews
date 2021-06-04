const { GetUser, CreateUser } = require('../data/querys')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUp = async ( { body: {email, password } } , res) => {
    try{

        const foundUser = await GetUser(email);
        
        if(!foundUser){
            return res.status(403).send({
                messange: "Такой email уже существует",
                err
            })
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        console.log(passwordHash);

        await CreateUser(email, passwordHash);

        return res.status(200).send({
            messange: "Пользователь создан",
        })

    }catch(err){
        res.status(403).send({
            messange: 'Ваш логин или пороль неподходят!'
        })
    }
}

const login = async ( { body: {email, password } }, res) => {
    try{

        const foundUser = await GetUser(email);
        console.log(foundUser);

        if(!!foundUser){
            if( bcrypt.compareSync(password, foundUser[0].users_password) ){
                
                const token = jwt.sign({ userId: foundUser[0].users_id, userEmail: foundUser[0].users_email }, process.env.JWT_SECRET);
                console.log(token)

                res.status(200).send({
                    messange: 'Пользователь залогинин',
                    token: token
                })

            }else{
                res.status(403).send({
                    error: 'Ваш логин или пороль неподходят!',
                })
            }
        }
        else{
            res.status(403).send({
                error: 'Ваш логин или пороль неподходят!',
            })
        }

    }catch(err){
        res.status(403).send({
            error: 'Ваш логин или пороль неподходят!',
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