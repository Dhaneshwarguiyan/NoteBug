import React, { useState } from "react";
import profile from "../assets/profile.jpeg";
import Comment from "./Comment.jsx";
import { BiUpvote } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";

const Post = () => {
  const size = 25;
  const [postData, setPostData] = useState({
    upvote: false,
    downvote: false,
    bookmark: false,
  });
  const [comment, setComment] = useState(false);
  function commentHandler() {
    setComment(!comment);
  }
  function clickHandler(value, data) {
    setPostData({
      ...postData,
      [value]: !data,
    });
  }
  return (
    <div className="flex gap-5 text-slate-100 w-full m-auto py-4 px-5 border-t border-t-slate-700">
      <img
        src={profile}
        alt=""
        className="w-[50px] h-[50px] rounded-[50%] mt-2"
      />
      <div>
        <div>
          <span className="font-extralight text-sm">@Amitchauhan.Sep 15</span>
          <h2 className="text-xl font-semibold">
            This is demo Bug for not able to handle the cookies
          </h2>

          <div className="text-sm font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </div>
          <span>view Solution</span>
        </div>
        <div className="w-full flex gap-10 pt-5 pr-16">
          {postData.upvote ? (
            <BiSolidUpvote
              color="rgb(34, 197, 94)"
              className="cursor-pointer"
              size={size - 3}
              onClick={() => clickHandler("upvote", postData.upvote)}
            />
          ) : (
            <BiUpvote
              size={size - 3}
              className="cursor-pointer"
              onClick={() => clickHandler("upvote", postData.upvote)}
            />
          )}
          {postData.downvote ? (
            <BiSolidDownvote
              color="rgb(244, 44, 44)"
              size={size - 4}
              className="cursor-pointer"
              onClick={() => clickHandler("downvote", postData.downvote)}
            />
          ) : (
            <BiDownvote
              size={size - 4}
              className="cursor-pointer"
              onClick={() => clickHandler("downvote", postData.downvote)}
            />
          )}
          {
            <BiComment
              size={size - 5}
              className="cursor-pointer"
              onClick={commentHandler}
            />
          }
          {postData.bookmark ? (
            <FaBookmark
              size={size - 5}
              className="cursor-pointer"
              onClick={() => clickHandler("bookmark", postData.bookmark)}
            />
          ) : (
            <FaRegBookmark
              size={size - 6}
              className="cursor-pointer"
              onClick={() => clickHandler("bookmark", postData.bookmark)}
            />
          )}
        </div>
        {comment && (
          <div className="mt-5 w-full">
            <Comment />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
