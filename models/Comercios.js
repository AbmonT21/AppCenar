const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Comercios = sequelize.define("AppCenarDb", {
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
    Phone: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    } ,
    Imagen: {
      type: Sequelize.STRING,
      allowNull: true
      },
    HoraApertura: {
        type: Sequelize.STRING,
        allowNull: true
    },
    HoraCierre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Direccion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
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
    Calificacion: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Menu: {
      type: Sequelize.ARRAY,
      allowNull: true
    },
    Tipo: {
      type: Sequelize.STRING,
      allowNull: true
    },

  });

module.exports = Comercios;
    



