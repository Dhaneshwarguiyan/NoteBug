const User = require("../models/userModel.js");

async function getOneUser(req,res){
    try {
        const {userId} = req.params;
        const userData = await User.findById(userId).select("_id name userName posts followers followings");
        if(!userData){
            return res.status(404).send({message:"No User Exists"});
        }
        res.status(200).send(userData);
    } catch (error) {
        res.status(404).send({message:error});
    }
}

async function getAllUsers(req,res){
    try {
        const usersData = await User.find({}).select("_id name userName posts followers followings");
        if(!usersData){
            return res.status.send({message:"No User Exists"});
        }
        res.status(200).send(usersData);
    } catch (error) {
        res.status(404).send({message:error});
    }
}

module.exports = {
    getAllUsers,
    getOneUser
}