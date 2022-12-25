const { customer } = require("../models");

class CustomerController {
  static async getCustomers(req, res) {
    try {
      let customers = await customer.findAll({
        order: [["name", "asc"]],
      });
      res.render("customer/index.ejs", { customers });
      // res.json(customers);
    } catch (err) {
      res.json(err);
    }
  }
  static createPage(req, res) {
    res.render("customer/addPage.ejs");
  }

  static async create(req, res) {
    try {
      const { name, address } = req.body;

      let result = await customer.create({
        name,
        address,
      });
      res.redirect("/customers");
      // res.json(result);
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

      // result === 1
      //   ? res.json({ message: `ID ${id} has been deleted` })
      //   : res.json({ message: `ID ${id} cannot be deleted` });

      res.redirect("/customers");
    } catch (err) {
      res.json(err);
    }
  }

  static async editPage(req, res) {
    try {
      {
        const id = +req.params.id;
        let result = await customer.findByPk(id);

        res.render("customer/editPage.ejs", { result });
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, address } = req.body;

      let result = await customer.update(
        {
          name,
          address,
        },
        {
          where: { id },
        }
      );
      // result[0] === 1
      //   ? res.json({
      //       message: `ID ${id} has been updated`,
      //     })
      //   : res.json({
      //       message: `ID ${id} cannot updated !`,
      //     });

      res.redirect("/customers");
    } catch (err) {
      res.json(err);
    }
  }
}
module.exports = CustomerController;
