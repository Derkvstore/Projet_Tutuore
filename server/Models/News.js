const mongoose = require("mongoose");


const newSchema = new mongoose.Schema({
    titre : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        trim : true
    },
    contenu : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true,
        lowercase : true,
        trim : true
    },
    importance : {
        type : String,
        enum : ["eleve","normal"],
        required : true,
        lowercase : true,
        trim : true
    },
    auteur : {
        type : String,
        required : true,
        lowercase : true,
        trim : true
    },
    photo : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        trim : true
    }
}, {timestamps : true});


module.exports = mongoose.model("News", newSchema);