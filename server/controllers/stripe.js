const nodemailer = require("nodemailer");
const Stripe = require("stripe");
const { OrderDetail, Order, OrderHistory } = require("../models/index");

const stripe = Stripe(
  "sk_test_51OAayKJuOJZEn4NcSxlNQRIby1WndtIWD9SCEtXe99TJF5IqtyELh89Vzvp9ADpRrpCJK8OEMmfJbNn8YQvrk33300VsPMdBRX"
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "daothanhsondz1304@gmail.com",
    pass: "rwnjqyjnhvkmjymc",
  },
});

const stripeController = {
  createCheckoutSection: async (req, res, next) => {
    const { userEmail, userId, card, cardTotal } = req.body;
    const products = await Promise.all(
      card.map(async product => {
        const { title, image, quantity, price } = product;
        const data = await stripe.products.create({
          name: title,
          images: [image],
        });
        return {
          id: data.id,
          quantity,
          price,
        };
      })
    );
    const prices = await Promise.all(
      products.map(async product => {
        const data = await stripe.prices.create({
          product: product.id,
          unit_amount: product.price * 100,
          currency: "usd",
        });
        return {
          price: data.id,
          quantity: product.quantity,
        };
      })
    );

    const session = await stripe.checkout.sessions.create({
      line_items: prices,
      mode: "payment",
      success_url: `http://localhost:5173/checkout-success`,
      cancel_url: `http://localhost:5173/checkout-success`,
    });

    const orderDetail = await OrderDetail.create({
      userId,
      shipping: 0,
      totalPrice: cardTotal,
    });

    await Promise.all(
      card.map(async product => {
        const { id, quantity } = product;
        await Order.create({
          orderDetailId: orderDetail.id,
          productId: id,
          quantity: quantity,
        });
      })
    );
    await OrderHistory.create({
      orderDetailId: orderDetail.id,
      orderStatusId: "fb6e7047-818c-4e42-8841-dbae9dbc31d8",
    });

    await transporter.sendMail({
      from: '"Clicon 👻" <Clicon@gmail.com>', // sender address
      to: userEmail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: `Your orderIid is ${orderDetail.id}?`, // plain text body
      html: `<b>Your orderIid is ${orderDetail.id}</b>`, // html body
    });

    res.status(201).json({ url: session.url });
  },
};
module.exports = stripeController;
