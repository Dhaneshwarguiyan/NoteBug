import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";
import Comment from "./Comment.jsx";
import { BiUpvote } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BiSolidUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

//1:implement utility lib func to calc whether to show hours or days of day
//2: implement showing likes..
//3: show only one relevant comment ....

const Post = ({ data }) => {
  const size = 27;
  const [postData, setPostData] = useState({
    upvote: false,
    downvote: false,
    bookmark: false,
  });
  const [comment, setComment] = useState(false);
  const [user, setUser] = useState(null);
  const [dropDown, setDropDown] = useState(false);

  function dropHandler() {
    setDropDown(!dropDown);
  }

  async function likeHandler(){
    clickHandler("upvote",postData.upvote);
    try {
      await axios.get(`http://localhost:8000/api/v1/posts/likes/${data._id}`,{
        withCredentials:true
      })
    } catch (error) {
      
    }
  }

  async function updateBookmark() {
    clickHandler("bookmark", postData.bookmark);
    try {
      await axios.get(`http://localhost:8000/api/v1/posts/bookmarks/${data._id}`,{
        withCredentials:true
      })
    } catch (error) {
      toast(error.response.data.message);
      console.log(error);
    }
  }

  async function deleteHandler(id) {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/posts/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      //update automatically when deleted....
      toast(response.data.message);
    } catch (error) {
      //encounter error and give proper message
      toast("try again");
    }
  }
  function commentHandler() {
    setComment(!comment);
  }
  async function clickHandler(value, data) {
    setPostData({
      ...postData,
      [value]: !data,
    });
  }

//implement likes feature

  async function getUser() {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/users/me`,
        {
          withCredentials: true,
        }
      );
      // console.log(response.data.bookmarks);
      if (response.data.bookmarks.includes(data._id)) {
        setPostData({
          ...postData,
          bookmark: true,
        });
      }
      if(data.likes.includes(response.data._id)){
        setPostData({
          ...postData,
          upvote: true,
        });
      }
      const user = await axios.get(
        `http://localhost:8000/api/v1/users/one/${data.userId}`,
        {
          withCredentials: true,
        }
      );
      setUser(user.data);
    } catch (error) {
      //implement using toast...
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [data]);

  return (
    <div className="flex gap-5 text-primary_dark w-full m-auto py-4 px-5 border-t border-t-light_grey shadow-sm dark:text-light_grey dark:border-t-extra_light_grey">
      <img
        src={profile}
        alt=""
        className="w-[50px] h-[50px] rounded-[50%] mt-2"
      />
      <div className="w-full">
        <div>
          {user && (
            <span className="font-extralight text-sm">
              @{user.userName}.Sep 15
            </span>
          )}
          <h2 className="text-2xl font-medium">{data.title}</h2>

          <div className="text-lg font-light">{data.description}</div>
          <span className="text-lg hover:text-peach_orange">View Solution</span>
        </div>
        <div className="w-full flex gap-10 pt-5 pr-16">
          {postData.upvote ? (
            <BiSolidUpvote
              color="rgb(34, 197, 94)"
              className="cursor-pointer"
              size={size - 1}
              onClick={likeHandler}
            />
          ) : (
            <BiUpvote
              size={size - 1}
              className="cursor-pointer"
              onClick={likeHandler}
            />
          )}
          {postData.downvote ? (
            <BiSolidDownvote
              color="rgb(244, 44, 44)"
              size={size - 1}
              className="cursor-pointer"
              onClick={() => clickHandler("downvote", postData.downvote)}
            />
          ) : (
            <BiDownvote
              size={size - 1}
              className="cursor-pointer"
              onClick={() => clickHandler("downvote", postData.downvote)}
            />
          )}
          {
            <BiComment
              size={size - 4}
              className="cursor-pointer"
              onClick={commentHandler}
            />
          }
          {postData.bookmark ? (
            <FaBookmark
              size={size - 5}
              className="cursor-pointer"
              onClick={updateBookmark}
            />
          ) : (
            <FaRegBookmark
              size={size - 6}
              className="cursor-pointer"
              onClick={updateBookmark}
            />
          )}
        </div>
        {comment && (
          <div className="mt-5 w-full">
            <Comment />
          </div>
        )}
      </div>
      <div className="text-lg flex flex-col items-end">
        <BsThreeDotsVertical className="cursor-pointer" onClick={dropHandler} />
        {dropDown && (
          <div className="text-base mt-3 border dark:border-extra_light_grey px-3 py-2 rounded-lg cursor-pointer">
            <Link to={"/upload"}>
              <div className="border-b dark:border-b-extra_light_grey mb-1 pb-1">
                Edit
              </div>
            </Link>
            <div
              onClick={() => {
                deleteHandler(data._id);
              }}
            >
              Delete
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
