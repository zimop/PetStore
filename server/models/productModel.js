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

const addProduct = async (
  productName,
  description,
  productType,
  price,
  stock
) => {
  let result = await mysqlHandle.query(`INSERT INTO 
    Product (ProductName, Description, ProductType, Price, Stock) 
    VALUES (
      ${mysql.escape(productName)}, 
      ${mysql.escape(description)}, 
      ${mysql.escape(productType)}, 
      ${mysql.escape(price)},
      ${mysql.escape(stock)}
    );`);
  return result.insertId;
};

module.exports = {
  getProductList,
  getProductByType,
  getProductById,
  addProduct,
};
