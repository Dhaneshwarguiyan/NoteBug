const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function authentication(req, res, next) {
  try {
    const { email, password } = req.body;
    let user = null;
    user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).send({ message: "Incorrect email or Password" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (!result) {
        return res.status(401).send({ message: "Incorrect email or Password" });
      }
      const payload = {
        user: {
          id: user._id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "3h",
      });
      res.cookie("token", token, {
        httpOnly: true, // Ensures the cookie is only accessible by the web server
        secure: false, // Ensures the cookie is sent only over HTTPS
        sameSite: "None", // Enables cross-site requests, required for cross-origin
        maxAge: 3 * 60 * 60 * 1000, // Cookie expiration (3 hour)
      });
      next();
    });
  } catch (error) {
    res.status(401).send({ message: error });
  }
}

module.exports = authentication;
