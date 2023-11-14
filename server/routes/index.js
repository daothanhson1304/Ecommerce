const express = require("express");
const routes = express.Router();

routes.use("/auth", require("./auth"));
routes.use("/product", require("./product"));
routes.use("/stripe", require("./stripe"));
routes.use("/order", require("./order"));

module.exports = routes;
