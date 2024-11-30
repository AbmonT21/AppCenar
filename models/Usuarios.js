const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Usuarios = sequelize.define("AppCenarDb", {
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
    LastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    } ,
    Direccion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Telefono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Imagen: {
      type: Sequelize.STRING,
      allowNull: true
      },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Role: {
    type: Sequelize.STRING,
    allowNull: false
    },
    Status: {
        type: Sequelize.BOOLEAN,
    allowNull: false,
    },
    MetodoDePago: {
        type: Sequelize.STRING,
        allowNull: false
    },
    HistorialDePedidos: {
        type: Sequelize.STRING,
        allowNull: false
    },

    
  });
  Usuarios.hasMany(Pedidos);
  return sequelize.define('Pedidos', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
      Fecha: {
        type: Sequelize.DATE,
        allowNull: false
        },
        Total: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
          },
          MetodoDePago: {
            type: Sequelize.STRING,
            allowNull: false
            },
            HistorialDePedidos: {
              type: Sequelize.STRING,
              allowNull: false
              },
              Estado: {
                type: Sequelize.STRING,
                allowNull: false
                }
                });
                Pedidos.belongsTo(Usuarios);
                



module.exports = Usuarios;
    



