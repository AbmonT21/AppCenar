const express = require("express");


const router = express.Router();

const restaurantControler = require("../../controllers/clientControllers/restaurantController")


router.get("/Restaurant",restaurantControler.GetRestaurant);



module.exports = router;
