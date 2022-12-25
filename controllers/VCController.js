const { vehicleCustomer, vehicle, customer } = require("../models");

class VCController {
  static async getVC(req, res) {
    try {
      let vcs = await vehicleCustomer.findAll();

      res.json(vcs);
    } catch (err) {
      res.json(err);
    }
  }
  static createPage(req, res) {}

  static async create(req, res) {
    try {
      const { id_vehicle, id_customer } = req.body;

      let result = await vehicleCustomer.create({
        id_vehicle,
        id_customer,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      let result = await vehicleCustomer.destroy({
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
      const { id_vehicle, id_customer } = req.body;

      let result = await vehicleCustomer.update(
        {
          id_vehicle,
          id_customer,
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
module.exports = VCController;
