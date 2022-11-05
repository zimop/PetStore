const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const secrets = require("../../secrets.json");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  let user = await userModel.getUserByEmail(req.body.email);
  if (!user) {
    return res
      .status(401)
      .send({ error: "Error: Incorrect email or password." });
  }
  let validPassword = bcrypt.compareSync(req.body.password, user.Password);
  if (!validPassword) {
    return res
      .status(401)
      .send({ error: "Error: Incorrect email or password." });
  } else {
    return res.status(200).send(getTokenResponse(user.UserID));
  }
};

const signup = async (req, res) => {
  try {
    let userId = await userModel.createUser(
      req.body.email,
      req.body.firstname,
      req.body.lastname,
      req.body.password
    );
    return res.status(200).send(getTokenResponse(userId));
  } catch (error) {
    if (error.code == "ER_DUP_ENTRY") {
      return res.status(400).send({ error: "Error: Email is already in use." });
    }
    return res.status(500);
  }
};

const getTokenResponse = (userId) => {
  let token = jwt.sign({ id: userId }, secrets.secretKey, { expiresIn: 300 });
  return { id: userId, accessToken: token };
};

module.exports = {
  login,
  signup,
};
