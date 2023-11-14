const {
  OrderHistory,
  OrderDetail,
  OrderStatus,
  User,
} = require("../models/index");

const orderController = {
  getOrderActivity: async (req, res, next) => {
    try {
      const { email, orderId } = req.body;
      const orderDetail = await OrderDetail.findOne({
        where: {
          id: orderId,
        },
        include: [
          {
            model: User,
            attributes: {
              exclude: ["id", "createdAt", "updatedAt", "name", "password"],
            },
            as: "user",
          },
        ],
      });
      const { user, totalPrice, createdAt } = orderDetail;
      if (email !== user.email) {
        return res.status(400).send("Invalid email");
      }
      const orderActivity = await OrderHistory.findAll({
        where: {
          orderDetailId: orderId,
        },
        attributes: {
          exclude: ["id", "updatedAt", "orderStatusId"],
        },
        include: [
          {
            model: OrderStatus,
            as: "status",
            attributes: {
              exclude: ["id"],
            },
          },
        ],
      });
      const data = orderActivity.map(item => item.status);
      return res
        .status(200)
        .json({ totalPrice, orderId, activity: data, createdAt });
    } catch (error) {
      return res.status(400).send("Invalid orderId");
    }
  },
};

module.exports = orderController;
