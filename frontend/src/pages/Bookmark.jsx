import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import useLogout from '../utils/logout';

const Bookmark = () => {
  const logout = useLogout();
  const [bookmarks,setBookmarks] = useState(null);
  
  async function getAllBookmarks(){
    try {
      const response = await axios.get("http://localhost:8000/api/v1/posts/bookmarks/all",{
        withCredentials:true
      })
      setBookmarks(response.data.bookmarks);
    } catch (error) {
      logout()
    }
  }
  useEffect(()=>{
    getAllBookmarks();
  },[])
  return (
    <div className='text-2xl text-slate-200 w-3/5'>
        {bookmarks && bookmarks.map(data=>{
          return <Post data={data}/>
        })}
    </div>
  )
}

export default Bookmark
