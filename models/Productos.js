const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const Comercios = require("./Comercios");

const Productos = sequelize.define("AppCenarDb", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  Description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Imagen: {
      type: Sequelize.STRING,
      allowNull: true
  },
   Price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
   },
   CategoryFood: {
    type: Sequelize.STRING,
    allowNull: false
    },
    Status: {
        type: Sequelize.BOOLEAN,
    allowNull: false,
    },
    Comercios_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        FOREIGNKEYS: Comercios
    }

  });

module.exports = Productos;
    



