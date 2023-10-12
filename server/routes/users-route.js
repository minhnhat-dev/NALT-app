const express = require("express");
const userControllers = require("../controllers/users-controllers");
const router = express.Router();

router.get("/", userControllers.getUsers);

module.exports = router;
