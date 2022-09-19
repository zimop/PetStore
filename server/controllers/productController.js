productModel = require("../models/productModel.js");

const getAllProducts = async (req, res) => {
  let data = await productModel.getProductList();
  console.log(data);
  res.json(data);
};

const getProductById = async (req, res) => {
  try {
    // GET A PRODUCT OBJECT FROM DB
    let data = await productModel.getProductById(req.params.id);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
