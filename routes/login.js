const express = require("express");


const router = express.Router();

const LoginController = require("../controllers/LoginController");



router.get("/Login",LoginController.GetLogin);



module.exports = router;
