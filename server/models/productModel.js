mysqlHandle = require("../mysqlHandle.js");
mysql = require("mysql")

const getProductList = async () => {
  return await mysqlHandle.query("SELECT * FROM Product;");
};

const getProductById = async (id) => {
  return await mysqlHandle.query(`SELECT * FROM Product WHERE ProductID=${mysql.escape(id)};`);
};

module.exports = {
  getProductList,
  getProductById,
};
