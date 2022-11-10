ordersModel = require("../models/ordersModel");
productModel = require("../models/productModel");

const createOrder = async (req, res) => {
  try {
    let data = req.body;
    if (req.isAuthenticated) {
      data.userId = req.userId;
    }
    if (validateData(data)) {
      let cartItems = JSON.parse(data.cartItems);
      let outOfStockItems = await checkCartStock(cartItems);
      if (outOfStockItems.length !== 0) {
        // Some items are out of stock
        let message = "The following items are out of stock: ";
        for (const id of outOfStockItems) {
          let productName = await productModel.getProductName(id);
          message += productName + ", ";
        }
        message +=
          "please reduce their quantities or remove them from your shopping cart.";
        return res.status(409).send({ error: message });
      }
      let orderId = await ordersModel.createOrder(data);
      for (const item of cartItems) {
        await ordersModel.addProductToOrder(orderId, item.id, item.qty);
        await productModel.reduceStock(item.id, item.qty);
      }
      return res.status(200).send({ orderId });
    } else {
      return res.status(400).send({ error: "Received invalid data." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal server error." });
  }
};

const validateData = (data) => {
  // TODO: data validation logic here (e.g. check address)
  try {
    let cartItems = JSON.parse(data.cartItems);
    if (cartItems.length === 0) {
      return false;
    } else {
      for (const item of cartItems) {
        if (item.qty <= 0) {
          return false;
        }
      }
    }
  } catch {
    return false;
  }
  return true;
};

const checkCartStock = async (cartItems) => {
  let outOfStockItems = [];
  for (const item of cartItems) {
    let stock = await productModel.getProductStock(item.id);
    if (item.qty > stock) {
      outOfStockItems.push(item.id);
    }
  }
  return outOfStockItems;
};

module.exports = {
  createOrder,
};
