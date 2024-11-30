const { Module } = require("module");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./AppCenarDb.sqlite",
  
});

module.exports= sequelize;