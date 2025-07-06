const jwt = require('jsonwebtoken');

module.exports = (user) => {
    return jwt.sign({userId : user._id}, process.env.JWT_SECRET_KEY, { expiresIn : "2h" });
}