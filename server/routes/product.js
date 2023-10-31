const routes = require("express").Router();
const productController = require("../controllers/product");

routes.get("/get-products", productController.getProducts);

module.exports = routes;
