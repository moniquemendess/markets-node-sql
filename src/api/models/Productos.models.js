const { DataTypes } = require("sequelize");
const sequelize = require("../../db/sequelize");

const Product = sequelize.define(
  "Product",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
    factory_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false, // Desabilita os timestamps automáticos
  }
);
module.exports = Product;
