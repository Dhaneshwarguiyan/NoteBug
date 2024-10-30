async function loginController(req, res) {
  return res.status(200).send({
        message:"Successfully logged in ",
        success:true
  });
}

async function signupController(req, res) {
  res.status(200).send({
    message:"Successfully Created your account",
    success:true
  });
}
module.exports = {
  loginController,
  signupController,
};
