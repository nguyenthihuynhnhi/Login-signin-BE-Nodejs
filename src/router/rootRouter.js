const express = require('express');
const { videoRouter } = require('./videoRouter');
const { testRouter } = require('./testRouter');
const { authRouter } = require('./authRouter');

const rootRouter = express.Router();

rootRouter.use('/video', videoRouter);
rootRouter.use('/test', testRouter);

rootRouter.use('/auth', authRouter);

module.exports = {
  rootRouter
};
