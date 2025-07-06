const mongoose = require("mongoose");


const teacherSchema = new mongoose.Schema({
    nom : {
        type : String,
        lowercase : true,
        maxLength : 50,
        trim : true,
        required : [true , "veillez remplir ce champs * Nom *"]
    },
    prenom : {
        type : String,
        lowercase : true,
        maxLength : 50,
        trim : true,
        required : [true , "veillez remplir ce champs * Prenom *"]
    },
    passW : {
        type : String,
        minLength : [10, 'Mot de passe trop court! '],
        select : false,
        trim : true,
    },
    filiere : {
        type : String,
        lowercase : true,
        maxLength : 30,
        trim : true,
        required : [true , "veillez remplir ce champs * Filiere *"]
    },
    matiere : {
        type : String,
        lowercase : true,
        maxLength : 30,
        trim : true,
        required : [true , "veillez remplir ce champs * Filiere *"]
    },
    quartier : {
        type : String,
        lowercase : true,
        maxLength : 30,
        trim : true,
        required : [true , "veillez remplir ce champs * Quartier *"]
    },
    tel : {
        type : String,
        minLength : [8, 'Ce numero de téléphone est incomplet veillez entrer un numéro correct! '],
        maxLength : [8, 'Ce numero de téléphone dépasse veillez entrer un numéro correct! '],
        trim : true,
        required : [true , "veillez remplir ce champs * Tel *"]
    },
    mail : {
        type : String,
        unique : true,
        trim : true,
        required : [true , "veillez remplir ce champs * Email *"]
    },
    photo : {
        type : String,
        required : [true , "veillez remplir ce champs * Photo *"]
    },
    date_naissance : {
        type : Date,
        //required : [true , "veillez remplir ce champs * Date de naissance *"]
    },
    status : {
        type : String,
        default : 'teacher'
    }
}, {timestamps : true})


module.exports = mongoose.model("Teachers",teacherSchema);