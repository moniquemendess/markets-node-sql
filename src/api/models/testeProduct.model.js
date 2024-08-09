const { DataTypes } = require("sequelize");
const sequelize = require("../../db/sequelize");

// Definir la estructura del modelo de datos conforme en la base de datos sql

const Product = sequelize.define(
  "Product",

  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // Auto-incremento
      primaryKey: true, // llave primária
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    factory_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Factories", // nombre de la tabela referenciada
        key: "id", // llave extranjera
      },
    },
  },
  {
    tableName: "Products", // nombre de la tabela en la base de datos
    timestamps: false, // Si la tabela no tienes columnas `createdAt` y`updatedAt`
  }
);

module.exports = Product;
