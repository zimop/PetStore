const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController");
const authenticationMiddleware = require("../middleware/authentication");

router.use(authenticationMiddleware.authenticateUser);

router.post("/createOrder", ordersController.createOrder);

module.exports = router;
