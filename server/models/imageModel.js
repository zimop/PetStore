mysqlHandle = require("../mysqlHandle.js");
mysql = require("mysql")

const getImagesByProductID = async (productId) => {
    return await mysqlHandle.query(`SELECT ImageURL FROM ProductImage NATURAL JOIN Image WHERE ProductID=${mysql.escape(productId)};`);
}

module.exports = {
    getImagesByProductID,
}