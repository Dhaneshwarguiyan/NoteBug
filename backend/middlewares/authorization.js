const User = require("../models/userModel");
const bcrypt = require("bcrypt");

async function authorization(req, res, next) {
  try {
    const { name, userName, email, password } = req.body;
    let user = null;
    //checking if the email already exists
    user = await User.findOne({ email: email });
    if (!user) {
      //hashing the password
      const salt = await bcrypt.genSalt(8);
      const hash = await bcrypt.hash(password, salt);

      await User.create({
        name: name,
        userName: userName,
        email: email,
        password: hash,
      });

      next();
    } else {
      res.status(404).send({ message: "email already in use" });
    }
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

module.exports = authorization;
