const express = require("express");


const router = express.Router();

const MisDireccionesController = require("../controllers/MisDireccionesController")


router.get("/Direcciones",MisDireccionesController.GetDirecciones);



module.exports = router;
