const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config.js');
const morgan = require('morgan');
//mongodb connect

const mongoose = require('mongoose');
mongoose.connect(config.db,function(err,e){
    if(err) return console.log(err);
    console.log('connected!!!');
});
//morgan middleware
app.use(morgan('tiny'));
//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//exposed ports
const port = process.env.PORT|| 9999 ;

//routes
const auth = require('./routes/user');
app.use('/api',auth);

app.listen(port);
console.log('localhost:'+port);
