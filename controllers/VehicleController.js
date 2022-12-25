const { vehicle } = require("../models");

class VehicleController {
  static async getVehicles(req, res) {
    try {
      let vehicles = await vehicle.findAll();

      res.json(vehicles)
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

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      let result = await vehicle.destroy({
        where: { id },
      });

      result === 1
        ? res.json({ message: `ID ${id} has been deleted` })
        : res.json({ message: `ID ${id} cannot be deleted` });
    } catch (err) {
      res.json(err);
    }
  }

  static async editPage(req, res) {}

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, brand, price } = req.body;

      let result = await vehicle.update(
        {
          name,
          brand,
          price,
        },
        {
          where: { id },
        }
      );
      result[0] === 1
        ? res.json({
            message: `ID ${id} has been updated`,
          })
        : res.json({
            message: `ID ${id} cannot updated !`,
          });
    } catch (err) {
      res.json(err);
    }
  }
}
module.exports = VehicleController;
