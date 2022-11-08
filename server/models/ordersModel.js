mysqlHandle = require("../mysqlHandle.js");
mysql = require("mysql");

const createOrder = async (data) => {
  let query = `INSERT INTO Orders
    (UserID, OrderTime, RecipientName, IsPickup, IsFulfilled, AddressLine1, AddressLine2, Suburb, State, Postcode)
    VALUES(
      ${mysql.escape(data.userId)},
      ${mysql.escape(Date.now())},
      ${mysql.escape(data.recipientName)},
      ${mysql.escape(data.pickup)},
      ${false},
      ${mysql.escape(data.addressLine1)},
      ${mysql.escape(data.addressLine2)},
      ${mysql.escape(data.suburb)},
      ${mysql.escape(data.suburb)},
      ${mysql.escape(data.state)},
      ${mysql.escape(data.postcode)}
    );`;
  let result = await mysqlHandle.query(query);
  return result.insertId;
};

const addProductToOrder = async (orderId, productId, quantity) => {
  let query = `INSERT INTO OrderProduct
    (OrderID, ProductID, Quantity)
    VALUES(
      ${mysql.escape(orderId)},
      ${mysql.escape(productId)},
      ${mysql.escape(quantity)},
    );`;
  await mysqlHandle.query(query);
};

module.exports = {
  createOrder,
  addProductToOrder,
};
