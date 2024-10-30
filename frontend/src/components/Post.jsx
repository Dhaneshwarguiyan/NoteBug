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
import axios from "axios";


//1:implement utility lib func to calc whether to show hours or days of day
//2: implement showing likes..
//3: show only one relevant comment ....


const Post = ({data}) => {
  const size = 27;
  const [postData, setPostData] = useState({
    upvote: false,
    downvote: false,
    bookmark: false,
  });
  const [comment, setComment] = useState(false);
  const [user, setUser] = useState(null);
  function commentHandler() {
    setComment(!comment);
  }
  async function clickHandler(value, data) {
    setPostData({
      ...postData,
      [value]: !data,
    });
  }

  // useEffect(()=>{
  //   try {
  //     async function getLikes(){
  //       const response = await axios.post(`http://localhost:8000/api/v1/posts/likes/${data._id}`,{
  //         withCredentials:true
  //       })
  //       console.log(response);
  //     //   if(response.data.liked){
  //     //     setPostData({
  //     //       ...postData,
  //     //       upvote: true,
  //     //     })
  //     //   }
  //     //   else{
  //     //     setPostData({
  //     //       ...postData,
  //     //       upvote: true,
  //     //     })
  //     //   }
  //     // }
  //     }
  //     getLikes();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },[])

  useEffect(()=>{
    try {
      async function getUser(){
        const user = await axios.get(`http://localhost:8000/api/v1/users/one/${data.userId}`,{
          withCredentials:true
        })
        setUser(user.data);
      }
      getUser();
    } catch (error) {
      //implement using toast...
      console.log(error)
    }
  },[data])


  return (
    <div className="flex gap-5 text-primary_dark w-full m-auto py-4 px-5 border-t border-t-light_grey shadow-sm dark:text-light_grey dark:border-t-extra_light_grey">
      <img
        src={profile}
        alt=""
        className="w-[50px] h-[50px] rounded-[50%] mt-2"
      />
      <div>
        <div>
          {
            user && <span className="font-extralight text-sm">@{user.userName}.Sep 15</span>
          }
          <h2 className="text-2xl font-medium">
            {data.title}
          </h2>

          <div className="text-lg font-light">
            {
              data.description
            }
          </div>
          <span className="text-lg hover:text-peach_orange">View Solution</span>
        </div>
        <div className="w-full flex gap-10 pt-5 pr-16">
          {postData.upvote ? (
            <BiSolidUpvote
              color="rgb(34, 197, 94)"
              className="cursor-pointer"
              size={size - 1}
              onClick={() => clickHandler("upvote", postData.upvote)}
            />
          ) : (
            <BiUpvote
              size={size - 1}
              className="cursor-pointer"
              onClick={() => clickHandler("upvote", postData.upvote)}
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
