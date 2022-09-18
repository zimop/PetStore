productModel = require("../models/productModel.js")

const getAllProducts = async (req, res) => {
    let data = await productModel.getProductList();
    console.log(data);
    res.json(data);
}

module.exports = {
    getAllProducts,
}