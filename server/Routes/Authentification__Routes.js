const express = require('express');
const authentificationC = require('../Controlers/Authentification__Controler');
const if_Is_Teacher_Midleware = require('../Middleware/is_Teacher');

const router = express.Router();

router.post('/login', if_Is_Teacher_Midleware.Login, authentificationC.Login_API);

router.post('/signin', if_Is_Teacher_Midleware.Signin, authentificationC.Signin_API);


module.exports = router;