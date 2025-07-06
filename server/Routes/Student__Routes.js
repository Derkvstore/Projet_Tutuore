const express = require('express');
const studentC = require('../Controlers/Student__Controler');
const route_Protection_Middleware = require('../Middleware/protected_Route');


const router = express.Router();

router.post('/post-news', route_Protection_Middleware, studentC.Post_News);


module.exports = router;