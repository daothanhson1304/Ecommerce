const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authController = {
  signIn: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({
        where: { email },
        attributes: ["name", "email", "password"],
      });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.SECRET_KEY,
          {
            expiresIn: "24h",
          }
        );
        res
          .status(200)
          .json({ user: { email: user.email, name: user.name }, token });
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  },

  signUp: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      if (!(email && password && name)) {
        res.status(400).send("All input is required");
      }
      const oldUser = await User.findOne({ where: { email } });
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
      encryptedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });
      const userResponse = { email: user.email, name: user.name };
      res.status(201).json(userResponse);
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = authController;
