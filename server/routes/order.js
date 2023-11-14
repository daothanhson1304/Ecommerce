const routes = require("express").Router();
const orderController = require("../controllers/order");

routes.post("/get-order-activity", orderController.getOrderActivity);

module.exports = routes;
