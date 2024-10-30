const Post = require("../models/postModel.js");

async function postPostController(req, res) {
  const data = req.body;
  const userId = req.user.id;
  try {
    const response = await Post.create({
      userId: userId,
      title: data.title,
      description: data.description,
    });
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ message: error, success: false });
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
    res.status(404).send({ message: error, success: false });
  }
}

async function getUserPost(req, res) {
  try {
    const userId = req.user.id;
    const posts = await Post.find({ userId: userId });
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).send({ message: error, success: false });
  }
}

async function getOtherUserPost(req, res) {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId: userId });
    res.status(200).send(posts);
  } catch (error) {
    res.status(404).send({ message: error, success: false });
  }
}

async function deletePostController(req, res) {
  try {
    const { postId } = req.params;
    const userId = req.user.id;
    const verifyDocument = await Post.findById(postId);
    if (!verifyDocument) {
      return res.status(404).send({ message: "Post Not found" ,success:true});
    }
    if (verifyDocument.userId.toString() !== userId) {
      return res
        .status(403)
        .send({ message: "You are not authorized to delete this post" ,success:false});
    }
    await Post.findByIdAndDelete(postId);
    res.status(200).send({ message: "Successfully Deleted" ,success:true});
  } catch (error) {
    res.status(404).send({ message: error, success: false });
  }
}

module.exports = {
  getAllPostController,
  getUserPost,
  postPostController,
  deletePostController,
  getOtherUserPost,
};
