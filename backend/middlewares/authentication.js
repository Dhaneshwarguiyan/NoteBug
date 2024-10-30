const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function authentication(req, res, next) {
  try {
    const { email, password } = req.body;
    let user = null;
    user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).send({ message: "Incorrect email or Password" ,success:false});
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (!result) {
        return res.status(401).send({ message: "Incorrect email or Password" ,success:false});
      }
      const payload = {
        user: {
          id: user._id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "3h",
      });
      res.cookie("token", token);
      next();
    });
  } catch (error) {
    res.status(401).send({ message: error ,success:false});
  }
}

module.exports = authentication;
