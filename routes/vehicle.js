const { Router } = require("express");
const vehicleRoute = Router();
const { VehicleController } = require("../controllers");

vehicleRoute.get("/", VehicleController.getVehicles);
vehicleRoute.get("/create", VehicleController.createPage);
vehicleRoute.post("/create", VehicleController.create);

module.exports = vehicleRoute;
