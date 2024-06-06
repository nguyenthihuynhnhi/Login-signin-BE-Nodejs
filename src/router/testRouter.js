const express = require('express');
const testRouter = express.Router();

testRouter.get('/', (req, res) => {
  res.send("jerry");
});

testRouter.post('/xacthuc', (req, res) => {

  const { email, matkhau } = req.body;

  if (matkhau === 1234) {
    res.status(200).send({ email, matkhau });
  } else {
    res.status(400).send("Mật khẩu sai nha mậy");
  }

});

module.exports = {
  testRouter
};

