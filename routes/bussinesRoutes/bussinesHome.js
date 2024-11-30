const express = require("express");


const router = express.Router();

const bussinesController = require("../../controllers/bussinesControllers/homeController");



router.get("/Bussines",bussinesController.GetBussines);



module.exports = router;
