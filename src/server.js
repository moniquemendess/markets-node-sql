const express = require("express");
const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Definindo a porta del servidor
const PORT = process.env.PORT || 3003;

// Inicializar el servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Rutas del routes
const ProductsRoutes = require("../src/api/routes/Products.routes");
app.use("/api/products", ProductsRoutes);

const MarketsRoutes = require("../src/api/routes/Markets.routes");
app.use("/api/markets", MarketsRoutes);

const FactoriesRoutes = require("../src/api/routes/Factories.routes");
app.use("/api/factories", FactoriesRoutes);

const StockRoutes = require("../src/api/routes/Stock.routes");
app.use("/api/stock", StockRoutes);
