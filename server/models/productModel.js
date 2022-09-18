mysqlHandle = require("../mysqlHandle.js")

const getProductList = async () => {
    return await mysqlHandle.query("SELECT * FROM Product;");
}

module.exports = {
    getProductList,
}