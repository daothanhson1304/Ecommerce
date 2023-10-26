const UserModel = require('../models/user');

const authController = {
  signIn: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send('All input is required');
      }
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.SECRET_KEY,
          {
            expiresIn: '2h',
          }
        );
        res.status(200).json({ user, token });
      }
      res.status(400).send('Invalid Credentials');
    } catch (err) {
      console.log(err);
    }
  },

  signUp: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send('All input is required');
      }
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.SECRET_KEY,
          {
            expiresIn: '2h',
          }
        );
        res.status(200).json({ user, token });
      }
      res.status(400).send('Invalid Credentials');
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = authController;
