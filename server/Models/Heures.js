const mongoose = require("mongoose");


const heureSchema = mongoose.Schema({
    date : {

    },
    heure : {

    },
    matiere : {

    },
    filiere : {

    }
}, {timestamps : true});


module.exports = mongoose.model("Heures", heureSchema);