const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        if(!req.headers.authorization){
            return res.json({
                success : false,
                message : "Veillez-vous connecter!"
            });
        }

        const token = req.headers.authorization.split(' ')[1];
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        req.user.id = decoded.userId;
        
        next();
    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
} 