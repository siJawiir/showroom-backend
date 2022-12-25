const { Router } = require("express");
const customerRoute = Router();
const { CustomerController } = require("../controllers");

customerRoute.get("/", CustomerController.getCustomers);
customerRoute.get("/create", CustomerController.createPage);
customerRoute.post("/create", CustomerController.create);
customerRoute.get("/delete/:id", CustomerController.delete)
customerRoute.get("/edit/:id", CustomerController.editPage)
customerRoute.post("/edit/:id", CustomerController.edit)

module.exports = customerRoute;
