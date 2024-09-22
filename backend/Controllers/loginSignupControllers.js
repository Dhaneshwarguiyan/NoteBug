async function loginController(req, res) {
  return res.status(200).send({
        message:"Successfully logged in "
  });
}

async function signupController(req, res) {
  res.status(200).send({
    message:"Successfully Created your account"
  });
}
module.exports = {
  loginController,
  signupController,
};
