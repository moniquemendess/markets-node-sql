const pool = require("../../../db/connection");
const Product = require("../../models/Productos.models");

const getAllProducts = async () => {
  const [rows] = await pool.execute("SELECT * FROM Products ");
  return rows;
};

const createProduct = async (productData) => {
  return await Product.create(productData);
};

module.exports = { getAllProducts, createProduct };
