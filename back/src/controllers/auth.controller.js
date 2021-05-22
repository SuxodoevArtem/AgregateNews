const { GetUser } = require('../data/querys')
require('dotenv').config();
const jwt = require('jsonwebtoken');

const signUp = async ({ body: {email, password } } , res) => {
    
    console.log('12')
    const founUser = await GetUser(email);
    
    console.log(founUser)

}

const login = async (req, res) => {
 
}

const logout = async (req, res) => {

}

module.exports = {
    signUp,
    login,
    logout
}