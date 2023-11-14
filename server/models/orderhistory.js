"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderHistory.belongsTo(models.OrderDetail, {
        foreignKey: "orderDetailId",
        as: "orderDetail",
      });
      OrderHistory.belongsTo(models.OrderStatus, {
        foreignKey: "orderStatusId",
        as: "status",
      });
    }
  }
  OrderHistory.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      orderDetailId: DataTypes.UUID,
      orderStatusId: DataTypes.UUID,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "OrderHistory",
    }
  );
  return OrderHistory;
};
