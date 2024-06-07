const express = require('express');
const { login, register, getListUser } = require('../controller/authController');

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.get('/', getListUser);

module.exports = {
  authRouter
};