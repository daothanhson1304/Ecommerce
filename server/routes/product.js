const routes = require("express").Router();
const productController = require("../controllers/product");

routes.get("/get-product", productController.getProducts);

module.exports = routes;
