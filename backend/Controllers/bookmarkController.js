const User = require("../models/userModel");
const Post = require("../models/postModel");

async function postbookmarkController(req, res) {
  const { postId } = req.params;
  const userId = req.user.id;
  try {
    const response = await User.findById(userId);
    if (response.bookmarks.includes(postId)) {
      //unbookmark feature
      await User.findByIdAndUpdate(userId, {
        $pull: { bookmarks: postId },
      });
      res
        .status(200)
        .send({ message: "Successfully removed from bookmark", success: true });
    } else {
      //added bookmark..
      await User.findByIdAndUpdate(userId, {
        $push: { bookmarks: postId },
      });
      res
        .status(200)
        .send({ message: "Successfully added to bookmark", success: true });
    }
  } catch (error) {
    res.status(401).send({ message: "Internal error", success: false });
    // res.send(error);
  }
}

async function getbookmarkController(req, res) {
  //get all bookmarks...
  console.log("here");
  const userId = req.user.id;
  try {
    const response = await User.findById(userId);
    // console.log(response);
    const bookmark = response.bookmarks;
    const posts = await Post.find({ _id: { $in: bookmark } });
    res
      .status(200)
      .send({ bookmarks:posts, success: true });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}


module.exports = { getbookmarkController, postbookmarkController };
