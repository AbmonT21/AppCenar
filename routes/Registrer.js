const express = require("express");


const router = express.Router();

const RegistrerController = require("../controllers/RegistrerController")


router.get("/Registrer",RegistrerController.GetRegistrer);



module.exports = router;
