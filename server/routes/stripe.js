const routes = require("express").Router();
const stripeController = require("../controllers/stripe");

routes.post("/create-checkout-session", stripeController.createCheckoutSection);

module.exports = routes;
