const mongoose = require("mongoose");


const filiereScheme = new mongoose.Schema({
    nom : {

    },
    niveau : {

    },
    duree : {

    },
    modules : {

    },
    horaires : {

    },
    Student_numb : {

    },
    frais : {
        type : Number,
        required : true
    }
}, {timestamps : true})


module.exports = mongoose.model("Filieres", filiereScheme);