const express = require("express");
const router = express.Router();

const {getOneUser,getAllUsers,getUser} = require("../Controllers/userControllers.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.get("/one/:userId",authMiddleware,getOneUser);
router.get("/me",authMiddleware,getUser);
router.get("/all",authMiddleware,getAllUsers);

module.exports = router;