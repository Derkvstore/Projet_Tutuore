const dotenv = require('dotenv');
dotenv.config({path : './config.env'});

const app = require('./app');
const mongoose = require('mongoose');

//Connection a la base de donnee mongoose avec les variables d'environnements
mongoose.connect(process.env.MONGODB_ATLAS_CONN_STRING)
.then( () =>{
    console.log('DB connected');
})
.catch( (err) =>{
    console.log('Error :'+ err);
})

const port = process.env.PORT || 4000; 

app.listen(port, () => { console.log(`Le server express est en marche sur http://localhost:${port}`) });