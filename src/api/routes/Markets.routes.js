const {
  getAllMarket,
  getMarketByNameHandler,
} = require("../controllers/Markets/Markets.controllers");
const MarketsRoutes = require("express").Router();

//Rutas

MarketsRoutes.get("/getAllMarkets", getAllMarket);
MarketsRoutes.post("/marketByName", getMarketByNameHandler);

module.exports = MarketsRoutes;
