import { FOREIGNKEYS } from "sequelize/lib/query-types";
import Usuarios from "./Usuarios";
import Comercios from "./Comercios";
import Productos from "./Productos";

const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const EstadoPedidos = sequelize.define("AppCenarDb", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Nombre: {
    type: Sequelize.STRING,
  }
  });


module.exports = EstadoPedidos;
    



