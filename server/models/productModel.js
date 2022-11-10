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

const editProduct = async (
  productId,
  productName,
  description,
  productType,
  price,
  stock
) => {
  await mysqlHandle.query(`UPDATE 
    Product 
    SET ProductName = ${mysql.escape(productName)},
        Description = ${mysql.escape(description)},
        ProductType = ${mysql.escape(productType)},
        Price = ${mysql.escape(price)},
        Stock = ${mysql.escape(stock)}
    WHERE ProductID=${mysql.escape(productId)}`);
  return productId;
};

const deleteProduct = async (id) => {
  await mysqlHandle.query(
    `DELETE FROM Product WHERE ProductID=${mysql.escape(id)}`
  );
};

module.exports = {
  getProductList,
  getProductByType,
  getProductById,
  addProduct,
  deleteProduct,
  editProduct,
};
