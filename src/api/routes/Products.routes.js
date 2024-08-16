const ProductsRoutes = require("express").Router();
const getAllProducts = require("../controllers/Products/products.controllers");
const addProduct = require("../controllers/Products/products.controllers");

//Rutas

ProductsRoutes.get("/getAllProducts", getAllProducts);
ProductsRoutes.get("/addProducts", addProduct);

module.exports = ProductsRoutes;
