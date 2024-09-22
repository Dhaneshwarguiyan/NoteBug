const Post = require("../models/postModel.js");


async function postPostController(req, res) {
  const data = req.body;
  const userId = req.user.id;
  try {
    await Post.create({
      userId: userId,
      title: data.title,
      description: data.description,
    });
    res.status(200).send({
      message: "Successfully posted",
    });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

// implement update post
// async function updatePostController(req,res){
//   try {
//     const data = req.body;
//     const userId = req.user.id;
//     const updatedPost = await Post.findByIdAndUpdate()
//   } catch (error) {
    
//   }
// }



async function getAllPostController(req, res) {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

async function getUserPost(req, res) {
  try {
    const userId = req.user.id;
    const posts = await Post.find({ userId: userId });
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

async function getOtherUserPost(req, res) {
  try {
    const {userId} = req.params;
    const posts = await Post.find({ userId: userId });
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

async function deletePostController(req,res){
  try{
    const {postId} = req.params;
    const userId = req.user.id;
    const verifyDocument = await Post.findById(postId);
    if(!verifyDocument){
      return res.status(404).send({message:"Post Not found"})
    }
    if(verifyDocument.userId.toString() !== userId){
      return res.status(403).send({ message: "You are not authorized to delete this post" });
    }
     await Post.findByIdAndDelete(postId);
    res.status(200).send({message:"Successfully Deleted"});
  }catch(error){
    res.status(404).send({message:error});
  }
}


module.exports = {
  getAllPostController,
  getUserPost,
  postPostController,
  deletePostController,
  getOtherUserPost
};
