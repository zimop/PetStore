const jwt = require("jsonwebtoken");
const secrets = require("../../secrets.json");
const mysqlHandle = require("../mysqlHandle");
const userModel = require("../models/userModel");

const authenticateUser = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    req.hasToken = false;
    req.isAuthenticated = false;
  } else {
    req.hasToken = true;
    jwt.verify(token, secrets.secretKey, (err, decoded) => {
      if (err) {
        req.isAuthenticated = false;
      } else {
        req.isAuthenticated = true;
        req.userId = decoded.id;
      }
    });
  }
  next();
};

const userAuthentication = async (req, res, next) => {
  if (req.isAuthenticated) {
    try {
      let user = await userModel.getUser(req.userId);
      req.user = user;
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(401).json({ error: "Unauthenticated" });
  }
  next();
};

const userHasManagerPerms = async (req, res, next) => {
  if (!req.isAuthenticated) {
    req.isManager = false;
  } else {
    req.isManager = await userModel.getIsManager(req.userId);
  }
  next();
};

const checkManagerPerms = (req, res, next) => {
  if (!req.isManager) {
    return res.status(403).json({ error: "Insufficient Permissions" });
  }
  next();
};

module.exports = {
  authenticateUser,
  userAuthentication,
  userHasManagerPerms,
  checkManagerPerms,
};
