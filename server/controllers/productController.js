productModel = require("../models/productModel.js");
imageModel = require("../models/imageModel.js");

const getProductsImages = async (data) => {
  await Promise.all(
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
  await getProductsImages(data);
  res.json(data);
};

const getCatProducts = async (req, res) => {
  try {
    let data = await productModel.getProductByType("cat");
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await getProductsImages(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getDogProducts = async (req, res) => {
  try {
    let data = await productModel.getProductByType("dog");
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await getProductsImages(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getMouseProducts = async (req, res) => {
  try {
    let data = await productModel.getProductByType("mouse");
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await getProductsImages(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getRabbitProducts = async (req, res) => {
  try {
    let data = await productModel.getProductByType("rabbit");
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await getProductsImages(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getBirdProducts = async (req, res) => {
  try {
    let data = await productModel.getProductByType("bird");
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await getProductsImages(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getFishProducts = async (req, res) => {
  try {
    let data = await productModel.getProductByType("fish");
    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }
    await getProductsImages(data);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

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
  getCatProducts,
  getDogProducts,
  getMouseProducts,
  getRabbitProducts,
  getBirdProducts,
  getFishProducts,
  getProductById,
};
