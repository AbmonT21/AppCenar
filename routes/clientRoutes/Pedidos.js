const express = require("express");


const router = express.Router();

const MisPedidosController = require("../../controllers/clientControllers/MisPedidosController")


router.get("/Pedidos",MisPedidosController.GetPedidos);



module.exports = router;
