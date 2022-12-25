const { Router } = require("express");
const vehicleRoute = Router();
const { VehicleController } = require("../controllers");

vehicleRoute.get("/", VehicleController.getVehicles);
vehicleRoute.get("/create", VehicleController.createPage);
vehicleRoute.post("/create", VehicleController.create);
vehicleRoute.get("/delete/:id", VehicleController.delete)
vehicleRoute.get("/edit/:id", VehicleController.editPage)
vehicleRoute.post("/edit/:id", VehicleController.edit)

module.exports = vehicleRoute;
