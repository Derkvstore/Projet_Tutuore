const mongoose = require("mongoose");


const matiereSchema = mongoose.Schema({
    nom : {

    },
    teachers : {

    },
    horaires : {

    },
    filiere : {

    },
    cours : {

    },

});

const Matiere = mongoose.model("Matieres" , matiereSchema);


module.exports = Matiere;