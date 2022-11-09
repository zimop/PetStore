const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/get-all-products", productController.getAllProducts);
router.get("/get-cat-products", productController.getCatProducts);
router.get("/get-dog-products", productController.getDogProducts);
router.get("/get-mouse-products", productController.getMouseProducts);
router.get("/get-rabbit-products", productController.getRabbitProducts);
router.get("/get-bird-products", productController.getBirdProducts);
router.get("/get-fish-products", productController.getFishProducts);

router.get("/get-product/:id", productController.getProductById);

router.post("/add-product", productController.addProduct);

module.exports = router;
