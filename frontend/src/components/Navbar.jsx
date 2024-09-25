import React from 'react'
import logo from '../assets/logo.avif';
const Navbar = () => {
  return (
    <div className='h-[60px] flex w-full justify-between items-center mt-2 pb-2 border-b border-slate-700'>
      <img src={logo} alt="" className='w-[50px] rounded-[50%]'/>
      <div className='text-2xl text-white font-medium'>Home</div>
      <button className='bg-green-500 px-5 py-2 my-1 rounded-2xl'>Post Bug</button>
    </div>
  )
}

export default Navbar
