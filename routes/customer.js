const { Router } = require("express");
const customerRoute = Router();
const { CustomerController } = require("../controllers");

customerRoute.get("/", CustomerController.getCustomers);
customerRoute.get("/create", CustomerController.createPage);
customerRoute.post("/create", CustomerController.create);

module.exports = customerRoute;
