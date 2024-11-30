const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Facturas = sequelize.define("AppCenarDb", {
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
      allowNull: false,
    },
  Price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
  Imagen: {
        type: Sequelize.STRING,
        allowNull: true
    },
  Status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },

  });


module.exports = Facturas;
    



