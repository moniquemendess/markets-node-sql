const ProductsRoutes = require("express").Router();
const getAllProducts = require("../controllers/Products/products.controllers");

//Rutas

ProductsRoutes.get("/getAllProducts", getAllProducts);

module.exports = ProductsRoutes;
