ordersModel = require("../models/ordersModel");

const createOrder = async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    if (validateData(data)) {
      let orderId = await ordersModel.createOrder(data);
      let cartItems = JSON.parse(data.cartItems);
      for (const item of cartItems) {
        await ordersModel.addProductToOrder(orderId, item.id, item.qty);
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
  return true;
};

module.exports = {
  createOrder,
};
