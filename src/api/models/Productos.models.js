const { DataTypes } = require("sequelize");
const sequelize = require("../../db/sequelize");

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: fase },
  category: { type: DataTypes.STRING, allowNull: fase },
  price: { type: DataTypes.FLOAT, allowNull: fase },
  brand: { type: DataTypes.STRING, allowNull: fase },
  factory_id: { type: DataTypes.INTEGER, allowNull: fase },
});

module.exports = Product;
