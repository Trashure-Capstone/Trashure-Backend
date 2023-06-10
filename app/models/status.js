"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      status.hasMany(models.jual_sampah, {
        foreignKey: "id_status",
      });
    }
  }
  status.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "status",
    }
  );
  return status;
};
