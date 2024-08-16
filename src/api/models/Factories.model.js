const { DataTypes } = require("sequelize");
const sequelize = require("../../db/sequelize");

const Factory = sequelize.define(
  "Factory",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.FLOAT, allowNull: true },
  },
  {
    timestamps: false, // Desabilita os timestamps automáticos
  }
);
module.exports = Factory;
