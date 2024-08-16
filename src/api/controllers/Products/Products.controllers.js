const getAllProductsService = require("../../services/Products/Products.service");
const productService = require("../../services/Products/Products.service");

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(404).json({ error: error.menssage });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    console.error("Erro ao adicionar produtos:", error);
    res.status(404).json({ error: error.menssage });
  }
};

module.exports = { getAllProducts, addProduct };
