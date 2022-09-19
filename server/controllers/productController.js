productModel = require("../models/productModel.js")

const getAllProducts = async (req, res) => {
    let data = await productModel.getProductList();
    res.json(data);
}

module.exports = {
    getAllProducts,
}