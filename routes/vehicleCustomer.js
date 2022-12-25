const { Router } = require("express");
const vehicleCustomerRoute = Router();
const { VCController } = require("../controllers");

vehicleCustomerRoute.get("/", VCController.getVC);
vehicleCustomerRoute.get("/create", VCController.create);
vehicleCustomerRoute.post("/create", VCController.createPage);
vehicleCustomerRoute.get("/delete/:id", VCController.delete)
vehicleCustomerRoute.get("/edit/:id", VCController.editPage)
vehicleCustomerRoute.post("/edit/:id", VCController.edit)

module.exports = vehicleCustomerRoute;