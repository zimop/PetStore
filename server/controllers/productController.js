productModel = require("../models/productModel.js");
imageModel = require("../models/imageModel.js");

const getProductsImages = async (data) => {
  return await Promise.all(
    data.map(async (row) => {
      row.ProductImage = await imageModel.getFirstImageByProductID(
        row.ProductId
      );
      return row;
    })
  );
};

const getAllProducts = async (req, res) => {
  let data = await productModel.getProductList();
  data = getProductsImages(data);
  res.json(data);
};

const getCatProducts = async (req, res) => {
  try {
    let data = await productModel.getCatProducts();
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    data = getProductsImages(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getDogProducts = async (req, res) => {};
const getMouseProducts = async (req, res) => {};
const getRabbitProducts = async (req, res) => {};
const getBirdProducts = async (req, res) => {};
const getFishProducts = async (req, res) => {};

const getProductById = async (req, res) => {
  try {
    // GET A PRODUCT OBJECT FROM DB

    let data = await productModel.getProductById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    data.images = await imageModel.getImagesByProductID(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  getCatsProducts,
  getDogsProducts,
  getMouseProducts,
  getRabbitsProducts,
  getBirdsProducts,
  getFishProducts,
  getProductById,
};
