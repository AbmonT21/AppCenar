import { FOREIGNKEYS } from "sequelize/lib/query-types";
import Usuarios from "./Usuarios";
import Comercios from "./Comercios";
import Productos from "./Productos";

const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const DetallePedidos = sequelize.define("AppCenarDb", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Pedidos_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    FOREIGNKEYS: Pedidos
  },
  Producto_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      FOREIGNKEYS: Productos
    },
  cantidad: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }

  });


module.exports = DetallePedidos;
    



