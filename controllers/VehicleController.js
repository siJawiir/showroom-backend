const { vehicle } = require("../models");

class VehicleController {
  static async getVehicles(req, res) {
    try {
      let vehicles = await vehicle.findAll({
        order:[["name","asc"]]
      });

      res.render("vehicle/index.ejs", { vehicles });
      // res.json(vehicles);
    } catch (err) {
      res.json(err);
    }
  }
  static createPage(req, res) {
    res.render("vehicle/addPage.ejs");
  }

  static async create(req, res) {
    try {
      const { name, brand, price, image } = req.body;

      let result = await vehicle.create({
        name,
        brand,
        price,
        image,
      });

      res.redirect("/vehicles");
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

      // result === 1
      //   ? res.json({ message: `ID ${id} has been deleted` })
      //   : res.json({ message: `ID ${id} cannot be deleted` });
      res.redirect("/vehicles");
    } catch (err) {
      res.json(err);
    }
  }

  static async editPage(req, res) {
    try {
      {
        const id = +req.params.id;
        let result = await vehicle.findByPk(id);

        res.render("vehicle/editPage.ejs", { result });
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, brand, price, image } = req.body;

      let result = await vehicle.update(
        {
          name,
          brand,
          price,
          image,
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
      res.redirect("/vehicles")
    } catch (err) {
      res.json(err);
    }
  }
}
module.exports = VehicleController;
