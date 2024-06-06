const express = require('express');
const videoRouter = express.Router();


videoRouter.post("/verify", (req, res) => {
  const { email, matkhau } = req.body;
  console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~  email, matKhau:", email, matkhau);

  res.send({ email, matkhau });
});

videoRouter.get('/', (req, res) => {
  res.send("nhiiiii");
});

videoRouter.get('/nhiiii', (req, res) => {
  res.send("jerry");
});

module.exports = {
  videoRouter
};
