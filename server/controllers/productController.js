productModel = require("../models/productModel.js");
imageModel = require("../models/imageModel.js")

const getAllProducts = async (req, res) => {
  let data = await productModel.getProductList();
  data = await Promise.all(data.map(async (row) => {
    console.log(row);
    row.ProductImage = await imageModel.getFirstImageByProductID(row.ProductId);
    return row;
  }));
  console.log(data);
  res.json(data);
};

const getProductById = async (req, res) => {
  try {
    // GET A PRODUCT OBJECT FROM DB
    let data = await productModel.getProductById(req.params.id);
    data.images = await imageModel.getImagesByProductID(req.params.id);
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
