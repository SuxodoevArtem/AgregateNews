require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { CreateDatabase } = require('./src/data/querys')
const checkJWT = require('./src/middlewares/webtoken.middleware')

const newsRouter = require('./src/routers/news')
const authRouter = require('./src/routers/auth')
const settingsRouter = require('./src/routers/settings');
const apiRouter = require('./src/routers/api');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(checkJWT);

app.use(newsRouter);
app.use(authRouter);
app.use(settingsRouter);
app.use(apiRouter);

CreateDatabase();

http.createServer({},app).listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
})