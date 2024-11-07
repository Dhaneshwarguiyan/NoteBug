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

async function logoutController(req,res){
  res.cookie('token',"");
  res.send({message:"Logged out",success:true})
}

module.exports = {
  loginController,
  signupController,
  logoutController
};
