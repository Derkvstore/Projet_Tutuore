const express = require('express');
const acceuilleC = require('../Controlers/Acceuille__Controler');
const route_Protection_Middleware = require('../Middleware/protected_Route');

const router = express.Router();
// Routes pour les utilisateurs non connecté
router.get('/', acceuilleC.Home__Page);

// Routes pour les utilisateurs qui sont connecté
router.get('/profil', route_Protection_Middleware, acceuilleC.Logged_In_User_Home__Page);
router.get('/news/:genre/:titre', route_Protection_Middleware, acceuilleC.Read_A_News);

module.exports = router;