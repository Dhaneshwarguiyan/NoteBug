const Comment = require("../models/commentModel.js");
const Post = require("../models/postModel.js");

async function commentPostController(req, res) {
  const data = req.body;
  const userId = req.user.id;
  const { postId } = req.params;
  try {
    const savedComment = await Comment.create({
      userId: userId,
      postId:postId,
      comment: data.comment,
    });
    // Handle this to always be an array even if the user send an array then handle it..
    await Post.findByIdAndUpdate(
      postId,
      //See postController.js for $push and $each
      { $push: { comments: savedComment._id } },
      { new: true, runValidators: true }
    );
    res.status(200).send({
      message: "Successfully commented",
    });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

async function getPostCommentController(req, res) {
  //data is fetched using post id form the params
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId: postId });
    res.status(200).send(comments);
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

async function deleteCommentController(req, res) {
  try {
    const { commentId } = req.params;
    const userId = req.user.id;
    const verifyDocument = await Comment.findById(commentId);
    if (!verifyDocument) {
      return res.status(404).send({ message: "comment Not found" });
    }
    if (verifyDocument.userId.toString() !== userId) {
      return res
        .status(403)
        .send({ message: "You are not authorized to delete this post" });
    }
    await Comment.findByIdAndDelete(commentId);
    res.status(200).send({ message: "Successfully Deleted" });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

module.exports = {
  getPostCommentController,
  commentPostController,
  deleteCommentController,
};
