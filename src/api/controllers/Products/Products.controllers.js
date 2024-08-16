const getAllProductsService = require("../../services/Products/Products.service");
const productService = require("../../services/Products/Products.service");

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error searching for products:", error);
    res.status(404).json({ error: error.menssage });
  }
};

const addProduct = async (req, res) => {
  try {
    await productService.createProduct(req.body);
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding products:", error);
    res.status(404).json({ error: error.menssage });
  }
};

module.exports = { getAllProducts, addProduct };
