import React, { useEffect, useState } from "react";
import Upload from "../components/Upload";
import Post from "../components/Post";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

const Feed = ({setLoggedIn}) => {
  const [posts,setPosts] = useState(null);
    async function getPosts(){
      try {
        const post = await axios.get('http://localhost:8000/api/v1/posts',{
          withCredentials:true
        })
        console.log(post)
        setPosts(post.data);
      } catch (error) {
        const {message} = error.response.data;
        toast(message);
        setLoggedIn(false);
      }
    }
  useEffect(()=>{
    getPosts();
  },[])


  return (
    <div className="w-4/6 h-auto overflow-auto no-scrollbar border-r border-r-light_grey dark:border-r-extra_light_grey">
      <Upload posts = {posts} setPosts={setPosts}/>
      {
        posts && posts.map((data,index)=>{
          return <Post data = {data} key={index}/>
        })
      }
      <ToastContainer />
    </div>
  );
};

export default Feed;
