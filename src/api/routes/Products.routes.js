const ProductsRoutes = require("express").Router();
const {
  getAllProducts,
  addProduct,
} = require("../controllers/Products/Products.controllers");

//Rutas

ProductsRoutes.get("/getAllProducts", getAllProducts);
ProductsRoutes.post("/addProducts", addProduct);

module.exports = ProductsRoutes;
