import React from 'react'
import profile from "../assets/profile.jpeg"

const Profile = () => {
  return (
    <div className='text-2xl text-slate-200 w-3/5'>
        <div className='flex'>
          <img src={profile} alt="" className='w-[200px] p-8'/>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <span className='text-4xl font-semibold'>
              Dhaneshwar Guiyan
            </span>
            <div className='flex gap-2 text-sm'>
              <span>45 upvotes</span>
              <span>60 Answers</span>
            </div>
          </div>
        </div>
            <div className='w-full'>
              about
            </div>
            <div className='w-full'>
              Badges
            </div>
    </div>
  )
}

export default Profile
