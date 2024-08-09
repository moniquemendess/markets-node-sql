const getAllStock = require("../controllers/Stock/Stock.controllers");

const StockRoutes = require("express").Router();

StockRoutes.get("/getAllStock", getAllStock);

module.exports = StockRoutes;
