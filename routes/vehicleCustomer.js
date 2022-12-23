const { Router } = require("express");
const vehicleCustomerRoute = Router();
const { VCController } = require("../controllers");

vehicleCustomerRoute.get("/", VCController.getVC);
vehicleCustomerRoute.post("/create", VCController.create);

module.exports = vehicleCustomerRoute;