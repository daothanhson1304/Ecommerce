const routes = require("express").Router();
const productController = require("../controllers/product");

routes.get("/get-products", productController.getProducts);
routes.get("/get-product-detail", productController.getProductDetail);

module.exports = routes;
