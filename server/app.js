const express =require('express');
const cors = require('cors');
const morgan = require('morgan');

const authentification__Route = require('./Routes/Authentification__Routes');
const acceuille__Route = require('./Routes/Aceuille__Routes');
const student__Route = require('./Routes/Student__Routes');


//Creation du serveur express 
const app = express();

//Use Development Midleware
if(process.env.NODE_ENV === 'developement'){
    app.use(morgan('dev'))
}

//Use Midleware
app
    .use(express.json())
    .use(cors())

//Use router Routes
app
    .use('/ISTA/api/auth', authentification__Route )
    .use('/ISTA/api/home', acceuille__Route)
    .use('/ISTA/api/user', student__Route)
    .use('/ISTA/api/teacher', student__Route)


//Export app (express server)
module.exports = app;