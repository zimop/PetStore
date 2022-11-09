productModel = require("../models/productModel.js");
imageModel = require("../models/imageModel.js");

const getAllProducts = async (req, res) => {
  let data = await productModel.getProductList();
  data = await Promise.all(
    data.map(async (row) => {
      row.ProductImage = await imageModel.getFirstImageByProductID(
        row.ProductId
      );
      return row;
    })
  );
  res.json(data);
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

// https://stackoverflow.com/a/1421988
function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

const addProduct = async (req, res) => {
  try {
    if (!isNumber(req.body.productPrice)) {
      return res.status(400).json({ error: "Price is not a number" });
    }
    let productId = await productModel.addProduct(
      req.body.productName,
      req.body.productDescription,
      req.body.productCategory,
      req.body.productPrice
    );
    return res.status(200).json({ productId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const editProduct = async (req, res) => {
  try {
    if (!isNumber(req.body.productPrice)) {
      return res.status(400).json({ error: "Price is not a number" });
    }
    let productId = await productModel.editProduct(
      req.body.productId,
      req.body.productName,
      req.body.productDescription,
      req.body.productCategory,
      req.body.productPrice
    );
    return res.status(200).json({ productId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    console.log(req.body.id);
    await productModel.deleteProduct(req.body.id);
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  editProduct,
};
