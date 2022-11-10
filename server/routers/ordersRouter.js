const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController");

router.post("/createOrder", ordersController.createOrder);

module.exports = router;
