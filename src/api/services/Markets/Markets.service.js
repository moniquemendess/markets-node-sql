const pool = require("../../../db/connection");

//Definir las consultas sql

// función para mostrar todo los markets
const getAllMarkets = async () => {
  const [rows] = await pool.execute("SELECT * FROM Markets ");
  return rows;
};

// función para buscar el market por name
const getMarketByName = async (name) => {
  try {
    const [rows] = await pool.execute(
      "SELECT id, name, email FROM Markets WHERE name = ?",
      [name]
    );
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
};

module.exports = { getAllMarkets, getMarketByName };
