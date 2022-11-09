mysqlHandle = require("../mysqlHandle.js");
mysql = require("mysql");

const getProductList = async () => {
  return await mysqlHandle.query("SELECT * FROM Product;");
};

const getProductByType = async (type) => {
  return await mysqlHandle.query(
    `SELECT * FROM Product WHERE ProductType="${type}";`
  );
};

const getProductById = async (id) => {
  return (
    await mysqlHandle.query(
      `SELECT * FROM Product WHERE ProductID=${mysql.escape(id)};`
    )
  )[0];
};

module.exports = {
  getProductList,
  getProductByType,
  getProductById,
};
