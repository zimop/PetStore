const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");
const authenticationMiddleware = require("../middleware/authentication");

router.use(authenticationMiddleware.authenticateUser);
router.use(authenticationMiddleware.userAuthentication);

router.post("/get-user", profileController.getUser);

module.exports = router;
