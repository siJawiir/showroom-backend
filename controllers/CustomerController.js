const { customer } = require("../models");

class CustomerController {
  static async getCustomers(req, res) {
    try {
      let customers = await customer.findAll();

      res.json(customers);
    } catch (err) {
      res.json(err);
    }
  }
  static createPage(req, res) {}

  static async create(req, res) {
    try {
      const { name, adress } = req.body;

      let result = await customer.create({
        name,
        adress,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      let result = await customer.destroy({
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
      const { name, adress } = req.body;

      let result = await customer.update(
        {
          name,
          adress,
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
module.exports = CustomerController;
