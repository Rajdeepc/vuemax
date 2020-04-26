const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi); // for hapi object validator
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();
dotenv.config(); // to pull local configuration from .env file

// setup your routes here
const users = require('./routes/users');


// setup your middlewares here
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());


// setup your route definations
app.use('/users', users);


// Serve static files assets on heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'))
}

// MongoDB connection string
const MONGO_DB_CONN_STRING= `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URI}`;
mongoose.connect(process.env.MONGOLAB_URI || MONGO_DB_CONN_STRING)
.then(() => console.log("New connection established"))
.catch(err => console.log('Something went wrong' + err))

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

