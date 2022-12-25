const { vehicle } = require("../models");

class VehicleController {
  static async getVehicles(req, res) {
    try {
      let vehicles = await vehicle.findAll();

      res.json(vehicles);
    } catch (err) {
      res.json(err);
    }
  }
  static createPage(req, res) {}
  
  static async create(req, res) {
    try {
      const { name, brand, price } = req.body;

      let result = await vehicle.create({
        name,
        brand,
        price,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}
module.exports = VehicleController;
