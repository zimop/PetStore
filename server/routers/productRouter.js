const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/get-all-products", productController.getAllProducts);

module.exports = router;