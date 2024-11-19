const express = require("express");


const router = express.Router();

const drinkController = require("../controllers/drinkController")


router.get("/drink",drinkController.GetDrink);



module.exports = router;
