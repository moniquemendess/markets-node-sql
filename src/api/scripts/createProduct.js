const sequelize = require("../../db/sequelize");
const Product = require("../models/testeProduct.model"); // product definido en models de datos

// función para crear el producto (Script para interactuar con la BD)
const createProduct = async () => {
  try {
    const createNewProduct = await Product.create({
      name: "AguaDoce",
      category: "Creatina",
      price: 125.0,
      brand: "CoreFull",
      factory_id: 3, // factories
    });
    console.log("Product created", createNewProduct.toJSON());
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

// Probar la autenticación y sincronización de la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync(); // Sincronize se a conexão for bem-sucedida
  })
  .then(() => {
    console.log("Database synced");
    return createProduct(); // Crie o produto após sincronizar
  })
  .catch((err) => {
    console.error("Unable to connect to the database or sync:", err);
  });
