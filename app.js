//Import express
const express = require('express');
//Execute express
const app = express();
//For DB
const mongoose = require('mongoose');
//To connect privately
require('dotenv/config');

//Needed for covertions
const bodyParser = require('body-parser');

//every time we hit a request
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
 

//Middleware
// app.use('/posts', () => {
//     console.log('This the mw running');
// })
app.use('/posts', postsRoute);


//creating routes
app.get('/', (req,res) => {
    res.send('We are on home');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('connected to Db'));


//Booting up the server
app.listen(3000);