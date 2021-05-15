require('dotenv').config();

const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { CreateDatabase } = require('./src/data/querys')

const newsRouter = require('./src/routers/news')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(newsRouter);

CreateDatabase();

http.createServer({},app).listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
})