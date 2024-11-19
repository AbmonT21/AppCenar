const express = require("express");


const router = express.Router();

const restaurantControler = require("../controllers/restaurantController")


router.get("/Restaurant",restaurantControler.GetRestaurant);



module.exports = router;
