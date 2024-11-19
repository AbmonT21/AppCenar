const express = require("express");


const router = express.Router();

const forgetAccountController = require("../controllers/forgetAccountController");



router.get("/forget",forgetAccountController.GetRecover);






module.exports = router;
