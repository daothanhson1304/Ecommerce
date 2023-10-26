const routes = require('express').Router();
const authController = require('../controllers/auth');

routes.post('/sign-in', authController.signIn);
routes.post('/sign-up', authController.signUp);

module.exports = routes;
