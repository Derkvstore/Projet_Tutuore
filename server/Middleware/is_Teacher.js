const bcript = require('bcryptjs');
const create_JWT_Token = require('../Utils/jsonWebToken');
const Teachers = require("../Models/Teachers");


exports.Login = async (req, res, next) => {
    try {
        console.log('\n\n Req in teacher')
        console.log(req.body)
        console.log('\n\n')
        if(req.body.mail.includes('ISTA-TCR')) {
            console.log(req.body.mail.split('ISTA-TCR')[1]);

            const teacher = await Teachers.findOne({mail :req.body.email.split('ISTA-TCR')[1]}).select("+passW");
            if(!teacher){
                return res.json({
                    success : false,
                    message : "Votre addresse email est erronée veillez réessayer!"
                });
            }

            let isMatch = await bcript.compare(req.body.password, teacher.passW);
            if(!isMatch) {
                return res.json({
                    success : false,
                    message : "Invalid password!"
                });
            }

            let token = create_JWT_Token(teacher._id);

            return res.status(200).json({
                success : true,
                message : "Connection success",
                token
            });
        }

        next();
    }
    catch (error) {
        console.log('\n\n Req')
        console.log(error)
        console.log('\n\n')

        res.json({
            success : false,
            message : error.message
        });
    }
}

exports.Signin = async (req, res, next) => {
    if(req.body.email.includes('ISTA-TCR')) {
        return res.json({
            message : 'Desolé cet email est invalide',
            success : false
        });
    }

    next();
}