const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const authenticationMiddleware = require("../middleware/authentication");

router.get("/get-all-products", productController.getAllProducts);
router.get("/get-cat-products", productController.getCatProducts);
router.get("/get-dog-products", productController.getDogProducts);
router.get("/get-mouse-products", productController.getMouseProducts);
router.get("/get-rabbit-products", productController.getRabbitProducts);
router.get("/get-bird-products", productController.getBirdProducts);
router.get("/get-fish-products", productController.getFishProducts);

router.get("/get-product/:id", productController.getProductById);

router.post(
  "/add-product",
  authenticationMiddleware.authenticateUser,
  authenticationMiddleware.userAuthentication,
  authenticationMiddleware.userHasManagerPerms,
  authenticationMiddleware.checkManagerPerms,
  productController.addProduct
);

router.post(
  "/edit-product",
  authenticationMiddleware.authenticateUser,
  authenticationMiddleware.userAuthentication,
  authenticationMiddleware.userHasManagerPerms,
  authenticationMiddleware.checkManagerPerms,
  productController.editProduct
);

router.post(
  "/delete-product",
  authenticationMiddleware.authenticateUser,
  authenticationMiddleware.userAuthentication,
  authenticationMiddleware.userHasManagerPerms,
  authenticationMiddleware.checkManagerPerms,
  productController.deleteProduct
);

module.exports = router;
