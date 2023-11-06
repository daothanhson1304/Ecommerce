"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductProperties.belongsTo(models.Product, {
        foreignKey: "productId",
      });
      ProductProperties.belongsTo(models.CategoryProperties, {
        foreignKey: "categoryPropertiesId",
        as: "categoryProperties",
      });
    }
  }
  ProductProperties.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      productId: DataTypes.UUID,
      categoryPropertiesId: DataTypes.UUID,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductProperties",
    }
  );
  return ProductProperties;
};
