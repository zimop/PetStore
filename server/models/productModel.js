mysqlHandle = require("../mysqlHandle.js");

const getProductList = async () => {
  return await mysqlHandle.query("SELECT * FROM Product;");
};

const getProductById = async (id) => {
  return await mysqlHandle.query(`SELECT * FROM Product WHERE id = ${id};`);
};

module.exports = {
  getProductList,
  getProductById,
};
