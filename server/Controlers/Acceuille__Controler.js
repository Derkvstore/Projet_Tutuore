const Students = require('../Models/Students'); 
const Teacher =require('../Models/Teachers');
const News = require('../Models/News');


exports.Home__Page = async (req, res) => {
    let news = await News.find();
    console.log(news);

    res.status(200).json({
        success : true,
        message :"Bienvenu sur la page d'acceuille",
        data : news
    });
}

exports.Logged_In_User_Home__Page = async (req, res) => {
    let news = await News.find();
    console.log(news);
    
    let user = await Students.findOne({_id : req.userId});
    if(!user) {
        user = await Teacher.findOne({_id : req.userId});
    }

    res.status(200).json({
        success : true,
        message :"Bienvenu sur la page d'acceuille des utilisateur connecte",
        user,
        data : news,
    });
}

exports.Read_A_News = async (req, res) => {
    try {
        console.log(req.params.titre);
        
        let news = await News.findOne({titre : req.params.titre});
        if(!news){
            return res.json({
                message :"Article introuvable",
                success : false
            })
        }

        res.json({
            message :"News ouvert avec succes",
            success : true,
            data : news,
        })
    } catch (error) {
        res.json({
            message : error.message,
            success : false
        })
    }
}