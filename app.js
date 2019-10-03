const express = require('express');
const app = express();
const config = require('./config.js');
const morgan = require('morgan');
const db = require('./db/db');

//mongodb connect
db(config.db);

//morgan middleware
app.use(morgan('tiny'));

//express default parser middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//exposed ports
const port = process.env.PORT|| 9999 ;

//routes
const auth = require('./routes/user');
app.use('/api',auth);

app.listen(port);
console.log('localhost:'+port);
