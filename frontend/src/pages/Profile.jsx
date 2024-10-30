import React, { useState } from 'react'
import profile from "../assets/profile.jpeg"
import { useEffect } from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import Post from '../components/Post'

const Profile = () => {
  const [posts,setPosts] = useState(null);

  async function getMyPosts(){
    try {
      const post = await axios.get('http://localhost:8000/api/v1/posts/profile',{
        withCredentials:true
      })
      console.log(post)
      setPosts(post.data);
    } catch (error) {
      const {message} = error.response.data;
      toast(message);
    }
  }
useEffect(()=>{
  getMyPosts();
},[])


  return (
    <div className='text-2xl  w-3/5 dark:text-light_grey dark:border-r dark:border-r-extra_light_grey'>
        <div className='flex dark:border-b dark:border-b-extra_light_grey '>
          <img src={profile} alt="" className='w-[200px] p-8'/>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <span className='text-4xl font-bold'>
              Dhaneshwar Guiyan
            </span>
            <div className='flex gap-2 text-sm'>
              <span>45 upvotes</span>
              <span>60 Answers</span>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <div className='my-4'>Your Bugs</div>
          <div className='w-full'>
          {
            //your posts
            posts && posts.map((data,index)=>{
              return <Post data = {data} key={index}/>
            })
          }
          </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Profile
