const express = require("express");


const router = express.Router();

const MisPedidosController = require("../controllers/MisPedidosController")


router.get("/Pedidos",MisPedidosController.GetPedidos);



module.exports = router;
