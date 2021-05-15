require('dotenv').config();

const pgp = require('pg-promise')({});

const connection = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_NAME,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
}

const postgres = pgp(connection);

module.exports = postgres;

