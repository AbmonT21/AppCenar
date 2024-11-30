const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Usuarios = require("./Usuarios");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

const DisponibleDelivery = sequelize.define("AppCenarDb", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Usuario_id: {
      type: Sequelize.STRING,
      allowNull: false,
      FOREIGNKEYS: Usuarios
    },
    Status: {
        type: Sequelize.BOOLEAN,
    allowNull: false,
    }
    

  });


module.exports = DisponibleDelivery;
    



