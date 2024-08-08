const getAllProductsService = require("../../services/Products/getAllProducts.service");

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(404).json({ error: error.menssage });
  }
};

module.exports = getAllProducts;
