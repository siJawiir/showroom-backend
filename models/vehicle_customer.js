'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle_customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vehicle_customer.belongsTo(models.vehicle)
      vehicle_customer.belongsTo(models.customer)
    }
  }
  vehicle_customer.init({
    id_vehicle: DataTypes.INTEGER,
    id_customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicle_customer',
  });
  return vehicle_customer;
};