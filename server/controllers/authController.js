let userModel = require("../models/userModel.js");
let jwt = require("jwt");

const login = async (req, res) => {};

const signup = async (req, res) => {
  const body = req.body;
  const userId = userModel.createUser(
    body.email,
    body.firstname,
    body.lastname,
    body.password
  );
};

const getToken = (userId) => {};

module.exports = {
  login,
  signup,
};
