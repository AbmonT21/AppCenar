const express = require("express");


const router = express.Router();

const MisDireccionesController = require("../../controllers/clientControllers/MisDireccionesController")


router.get("/Direcciones",MisDireccionesController.GetDirecciones);



module.exports = router;
