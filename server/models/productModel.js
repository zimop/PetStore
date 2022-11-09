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

const getProductStock = async (id) => {
  return (
    await mysqlHandle.query(
      `SELECT Stock FROM Product WHERE ProductID=${mysql.escape(id)};`
    )
  )[0]?.Stock;
};

const getProductName = async (id) => {
  return (
    await mysqlHandle.query(
      `SELECT ProductName FROM Product WHERE ProductID=${mysql.escape(id)};`
    )
  )[0]?.ProductName;
};

const reduceStock = async (id, qty) => {
  await mysqlHandle.query(
    `UPDATE Product 
      SET Stock=(
          (
            SELECT Stock FROM (SELECT * FROM Product) AS Product 
            WHERE ProductID=${mysql.escape(id)}
          )-${mysql.escape(qty)}
        )
      WHERE ProductID=${mysql.escape(id)};`
  );
};

module.exports = {
  getProductList,
  getProductByType,
  getProductById,
  getProductStock,
  getProductName,
  reduceStock,
};
