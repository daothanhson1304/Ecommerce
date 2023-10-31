const express = require("express");
const routes = express.Router();

routes.use("/auth", require("./auth"));
routes.use("/product", require("./product"));

module.exports = routes;
