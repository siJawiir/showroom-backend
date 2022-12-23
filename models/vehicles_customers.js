'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicles_customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehicles_customers.init({
    id_vehicle: DataTypes.INTEGER,
    id_customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicles_customers',
  });
  return vehicles_customers;
};