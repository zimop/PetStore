const userModel = require("../models/userModel.js");

const getUser = async (req, res) => {
  return res.status(200).send(req.user);
};

module.exports = {
  getUser,
};
