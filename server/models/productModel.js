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
  let result = await mysqlHandle.query(`INSERT INTO 
    Product (ProductName, Description, ProductType, Price) 
    VALUES (
      ${mysql.escape(productName)}, 
      ${mysql.escape(description)}, 
      ${mysql.escape(productType)}, 
      ${mysql.escape(price)}
    );`);
  return result.insertId;
};

const deleteProduct = async (id) => {
  await mysqlHandle.query(
    `DELETE FROM Product WHERE ProductID=${mysql.escape(id)}`
  );
};

module.exports = {
  getProductList,
  getProductById,
  addProduct,
  deleteProduct,
};
