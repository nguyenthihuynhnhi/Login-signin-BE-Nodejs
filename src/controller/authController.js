const { sequelize } = require('../models/connect');
const initModels = require('../models/init-models');
//import để sử dụng thư viện mã hóa 
const bcryptjs = require("bcryptjs");
//tạo model để tương tác với dataBase => chấm tới findOne()., Create()
const model = initModels(sequelize);

const login = async (req, res) => {
  const { email, password } = req.body;
  //tìm email đã tồn tại hay chưa => nếu tồn tại thì đăng nhập, nếu k thì thất bại
  let existUser = await model.users.findOne({
    where: {
      email: email
    }
  });
  //kiểm tra xem không tồn tại thì return
  if (existUser === null) {
    res.status(400).send("đăng nhập không thành công"); //tài khoản không tồn tại => cho hacker lú lẫn => không biết là đã đăng ký chưa
    return;
  }

  //so sánh password ng dùng nhập vào và password đã mã hóa ở dataBase
  const isPassword = await bcryptjs.compare(password.toString(), existUser.password);

  //nếu là true thì đăng nhập thành công false thì thất bại
  if (isPassword === true) {
    res.status(200).send("đăng nhập thành công");
    return;
  } else {
    res.status(400).send("đăng nhập không thành công");
    return;
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;

  //kiểm tra xem nếu có rồi thì return không cần đăng ký mới
  const existUserCheck = await model.users.findOne({
    where: {
      email: email,
    }
  });

  if (existUserCheck !== null) {
    return res.status(400).send("Đăng ký không thành công");
  }

  //tạo độ phức tạp của mã hóa
  const salt = await bcryptjs.genSalt(10);
  // mã hóa
  const hashPassword = await bcryptjs.hash(password.toString(), salt);

  // tạo user
  const newUser = await model.users.create({ email, password: hashPassword });
  //tạo obj result mới, nhằm mục đích lọc bỏ password 
  const result = {
    user_id: newUser.user_id,
    email: newUser.email
  };
  //trả về obj đã được lọc
  return res.send(result);
};

const getListUser = async (req, res) => {
  const result = await model.users.findAll();
  console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ result:", result);

  return res.send(result);
};

module.exports = {
  login,
  register,
  getListUser
};