const express = require("express");


const router = express.Router();

const healtController = require("../controllers/healthController")


router.get("/health",healtController.GetHealth);



module.exports = router;
