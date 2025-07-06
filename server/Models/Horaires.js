const mongoose = require("mongoose");


const horaireSchema = mongoose.Schema({
    date : {

    },
    matiere : {

    },
    filiere : {

    }
}, {timestamps : true});


module.exports = mongoose.model("Horaires", horaireSchema);