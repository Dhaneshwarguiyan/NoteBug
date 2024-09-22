const express = require('express');
const router = express.Router();

const {loginController,signupController} = require('../Controllers/loginSignupControllers.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');


router.post('/login',authentication,loginController);
router.post('/signup',authorization,signupController);


module.exports = router;