const Post = require("../models/postModel.js");

async function likeController(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const postData = await Post.findById(id);
    if (postData.likes.includes(userId)) {
      //unlike feature
      const newPost = await Post.findByIdAndUpdate(id, {
        $pull: { likes: userId },
      });
      res.status(200).send({ message: "Unliked the post !", liked:false});
    } else {
      //like feature
      const newPost = await Post.findByIdAndUpdate(id, {
        $push: { likes: userId },
      });
      res.status(200).send({ message: "liked the post !",liked : true });
    }
  } catch (error) {
    res.status(404).send({ message: error });
  }
}

module.exports = likeController;
