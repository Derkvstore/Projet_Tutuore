const express = require('express');
const teacherC = require('../Controlers/Teacher_Controler');
const route_Protection_Middleware = require('../Middleware/protected_Route');


const router = express.Router();

router.post('/post-news', route_Protection_Middleware, teacherC.Post_News);


module.exports = router;