"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CategoryProperties.hasMany(models.ProductProperties, {
        foreignKey: "categoryPropertiesId",
        as: "categoryProperties",
      });
      CategoryProperties.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
    }
  }
  CategoryProperties.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      categoryId: DataTypes.UUID,
      property: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CategoryProperties",
    }
  );
  return CategoryProperties;
};
