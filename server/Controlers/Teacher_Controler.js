const News = require('../Models/News');


exports.Voir_Ses_Information = async (req, res) => {
    
}

exports.Post_News = async (req, res) => {
    try {
        let news = await News.create(req.body);
        if(news)
            return res.status(201).json({
                message : "News poster avec succes",
                success : true,
            })
    } catch (error) {
        res.json({
            message : error.message,
            success : false
        })
    }
}

exports.Update_News = async (req, res) => {

}

exports.Delete_News = async (req, res) => {

}
    
exports.Search_News = async (req, res) => {

}
    
exports.Voir_Programme = async (req, res) => {

}

exports.Voir_Note = async (req, res) => {
    
}

exports.Voir_Moyenne = async (req, res) => {
    
}

exports.Voir_Cours = async (req, res) => {
    
}

exports.Voir_Lire_Cour = async (req, res) => {
    
}

exports.Voir_Telecharger_Cour = async (req, res) => {
    
}

exports.Voir_Bibliotheque = async (req, res) => {
    
}