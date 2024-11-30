const express = require("express");


const router = express.Router();

const deliverController = require("../../controllers//deliverControllers/deliverController");



router.get("/Deliver",deliverController.GetDeliver);



module.exports = router;
