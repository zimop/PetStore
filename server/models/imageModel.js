mysqlHandle = require("../mysqlHandle.js");
mysql = require("mysql");

const getImagesByProductID = async (productId) => {
  return await mysqlHandle.query(
    `SELECT ImageURL FROM ProductImage NATURAL JOIN Image WHERE ProductID=${mysql.escape(
      productId
    )};`
  );
};

const getFirstImageByProductID = async (productId) => {
  let image = await mysqlHandle.query(
    `SELECT ImageURL FROM ProductImage NATURAL JOIN Image WHERE ProductID=${mysql.escape(
      productId
    )} LIMIT 1;`
  );
  if (image[0] == null) {
    return null;
  }
  return image[0].ImageURL;
};

module.exports = {
  getImagesByProductID,
  getFirstImageByProductID,
};
