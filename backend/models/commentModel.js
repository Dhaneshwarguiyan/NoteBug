const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    postId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Post"
    },
    comment: {
      type: String,
      maxLength: 100,
      required: true,
    },
    replyId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    ],
  },
  { timestamps: true }
);

const Comment = new mongoose.model("Comment", commentSchema);

module.exports = Comment;
