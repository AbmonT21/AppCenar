const express = require("express");


const router = express.Router();

const MisFavoritosController = require("../../controllers/clientControllers/MisFavoritosController")


router.get("/Favoritos",MisFavoritosController.GetFavoritos);



module.exports = router;
