const Post = require("../models/postModel.js");
const Solution = require("../models/solutionModel.js");

async function deleteSolutionController(req, res) {
  try {
    const { solutionId } = req.params;
    const userId = req.user.id;
    const verifyDocument = await Solution.findById(solutionId);
    if (!verifyDocument) {
      return res.status(404).send({ message: "Solution Not found" });
    }
    if (verifyDocument.userId.toString() !== userId) {
      return res
        .status(403)
        .send({ message: "You are not authorized to delete this post" });
    }
    await Solution.findByIdAndDelete(solutionId);
    res.status(200).send({ message: "Successfully Deleted !" });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

async function getAllSolutionController(req,res)
{
  try {
    const {postId} = req.params;
    const solutions = await Solution.find({postId:postId});
    if(!solutions){
       return res.status(404).send({message:"No solutions exists"});
    }
    res.status(200).send(solutions);
  } catch (error) {
    res.status(404).send({message:error});
  }
}
async function solutionController(req, res) {
  const data = req.body;
  const userId = req.user.id;
  const { postId } = req.params;
  console.log(data.steps);
  try {
    const solution = await Solution.create({
      userId: userId,
      postId:postId,
      steps: data.steps, //array of steps
    });
    const temp = [solution._id];
    const updatePost = await Post.findByIdAndUpdate(
      postId, //the id you want to find the document for
      { $push: { solutions: { $each: temp } } }, //$set it update only the json present in data = {price:30} 'exact code .. { $set: data }
      //after few changes i encounter the problem that i needed to push an element into the array instead of overidding it so
      //i used {$push:{ <arrayname>:{$each:<new array to push into>} }}
      { new: true, runValidators: true }
    );
    if (!updatePost) {
      return res.status(404).send({ message: "Invalid Id" });
    }
    res.status(200).send({message:"succesfully posted"});
  } catch (error) {
    res.status(500).send({ message: "Couldnt update the item" });
  }
}

module.exports = { solutionController, deleteSolutionController,getAllSolutionController };
