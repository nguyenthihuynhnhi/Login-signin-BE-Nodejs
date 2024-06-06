const Sequelize = require('sequelize');

const sequelize = new Sequelize("db_nhi_backend_thuchanh", "root", "1234", {
  host: "localhost",
  port: "8999",
  dialect: "mysql"
});

module.exports = {
  sequelize
};

