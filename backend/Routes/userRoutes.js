const express = require("express");
const router = express.Router();

const {getOneUser,getAllUsers} = require("../Controllers/userControllers.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.get("/:userId",authMiddleware,getOneUser);
router.get("/",authMiddleware,getAllUsers);

module.exports = router;