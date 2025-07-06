const mongoose = require("mongoose");


const noteSchema = mongoose.Schema({
    moyenne : {

    },
    matiere : {

    },
    students : {

    },
    effet : {

    }
}, {timestamps : true});


module.exports = mongoose.model("Notes", noteSchema);