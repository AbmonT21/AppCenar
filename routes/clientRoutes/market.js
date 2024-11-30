const express = require("express");


const router = express.Router();

const marketController = require("../../controllers/clientControllers/marketController")


router.get("/market",marketController.GetMarket);



module.exports = router;
