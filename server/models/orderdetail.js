"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      OrderDetail.hasMany(models.Order, {
        foreignKey: "orderDetailId",
      });
      OrderDetail.hasMany(models.OrderHistory, {
        foreignKey: "orderDetailId",
      });
    }
  }
  OrderDetail.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      userId: DataTypes.UUID,
      shipping: DataTypes.INTEGER,
      totalPrice: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
