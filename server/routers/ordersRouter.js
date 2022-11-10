const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController");
const authenticationMiddleware = require("../middleware/authentication");

router.post(
  "/createOrder",
  authenticationMiddleware.authenticateUser,
  ordersController.createOrder
);

module.exports = router;
