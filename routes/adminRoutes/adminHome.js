const express = require("express");


const router = express.Router();

const adminController = require("../../controllers/adminControllers/adminController");



router.get("/Admin",adminController.GetAdmin);



module.exports = router;
