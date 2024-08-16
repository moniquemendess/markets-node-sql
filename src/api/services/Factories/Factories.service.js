const pool = require("../../../db/connection");
const Factory = require("../../models/Factories.model");

// Criar las fabricas
const createFactory = async (factoryData) => {
  return await Factory.create(factoryData);
};

// mostrar todas la fabricas
const getAllFactoriesService = async () => {
  const [rows] = await pool.execute("SELECT * FROM Factories");
  return rows;
};

module.exports = { createFactory, getAllFactoriesService };
