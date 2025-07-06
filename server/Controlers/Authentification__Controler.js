const bcript = require('bcryptjs');

const create_JWT_Token = require('../Utils/jsonWebToken');
const Students = require("../Models/Students");


exports.Login_API = async (req, res) => {
    try {
        console.log('\n\n Req in login')
        console.log(req.body)
        console.log('\n\n')
        let student = await Students.findOne({ mail : req.body.email }).select("+passW");
        if(!student){
            return res.json({
                message : "Votre addresse email est incorect veillez réessayer ou inscrivez vous si ce n'est pas déjà fait!",
                success : false
            });
        }

        let isMatch = bcript.compare(req.body.password, student.passW);
        if(!isMatch) {
            return res.json({
                message : "Invalid password!",
                success : false
            });
        }

        let token = create_JWT_Token(student._id);

        res.status(200).json({
            success : true,
            message : "Connection success",
            token
        });
    }
    catch (error) {
        console.log('\n\n Req')
        console.log(error)
        console.log('\n\n')
        res.json({
            message : error.message,
            success : false
        });
    }
}

exports.Signin_API = async (req, res) => {
    try {
        let student = await Students.findOne({mail : req.body.email});
        if(student){
            return res.json({
                message : "Cet email est déjà inscrit enter un autre ou connecter vous avec!",
                success : false
            });
        }

        let passW = await bcript.hash(req.body.password, 10);
        req.body.passW = passW

        student = await Students.create(req.body);

        let token = create_JWT_Token(student);
        
        res.status(200).json({
            message : "Inscription success",
            success : true,
            token
        });
    } 
    catch (error) {
         return res.json({
                message : error.message,
                success : false
            }); 
    }
}