const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");
const authenticationMiddleware = require("../middleware/authentication");

router.post(
  "/get-user",
  authenticationMiddleware.authenticateUser,
  authenticationMiddleware.userAuthentication,
  profileController.getUser
);

module.exports = router;
