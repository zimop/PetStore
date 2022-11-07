mysqlHandle = require("../mysqlHandle.js");
mysql = require("mysql");

const getProductList = async () => {
  return await mysqlHandle.query("SELECT * FROM Product;");
};

const getProductById = async (id) => {
  return (
    await mysqlHandle.query(
      `SELECT * FROM Product WHERE ProductID=${mysql.escape(id)};`
    )
  )[0];
};

const addProduct = async (productName, description, productType, price) => {
  await mysqlHandle.query(`INSERT INTO 
    Product (ProductName, Description, ProductType, Price) 
    VALUES (
      "${mysql.escape(productName)}", 
      "${mysql.escape(description)}", 
      "${mysql.escape(productType)}", 
      ${mysql.escape(price)}
    );`);
};

module.exports = {
  getProductList,
  getProductById,
  addProduct,
};
