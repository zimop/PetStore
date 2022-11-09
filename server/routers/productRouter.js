const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/get-all-products", productController.getAllProducts);

router.get("/get-product/:id", productController.getProductById);

router.post("/add-product", productController.addProduct);

router.post("/edit-product", productController.editProduct);

router.post("/delete-product", productController.deleteProduct);

module.exports = router;
