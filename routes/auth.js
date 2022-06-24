const express = require('express');
const authController = require('../controllers/registerAuth');
const authLog = require('../controllers/login')
const userController = require ('../controllers/userController');
const router = express.Router();

router.post("/register", authController.register )
router.post("/login", authLog.login)
router.get("/addBook", userController.view)
 

module.exports = router;