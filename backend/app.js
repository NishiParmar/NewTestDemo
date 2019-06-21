const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRoutes = require('./routes/post');

const app = express();

mongoose.connect("mongodb+srv://nishi_parmar:nishi2707@cluster0-b0bos.mongodb.net/node-angular")
    .then(() => {
        console.log('CONNECTED');
    })
    .catch(() => console.log('Connection failed!!'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-ALlow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control_Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use('/api/posts',postsRoutes); 

module.exports = app; 