const express = require("express");


const router = express.Router();

const RegistrerMarketController = require("../controllers/RegistrerMarketController")


router.get("/RegistrerMarket",RegistrerMarketController.GetRegistrer);



module.exports = router;
