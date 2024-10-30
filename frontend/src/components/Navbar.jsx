import React from 'react'
import logo from '../assets/logo.avif';
const Navbar = ({darkMode,setDarkMode,setLoggedIn}) => {
  function toggleDark(){
    setDarkMode(!darkMode);
  }

  function logout(){
    setLoggedIn(false);
    window.localStorage.removeItem("isLoggedIn");
  }

  return (
    <div className='h-[60px] flex w-full justify-between items-center mt-2 pr-24 pl-10 pb-2 border-b border-light_grey dark:border-b-extra_light_grey'>
      <img src={logo} alt="" className='w-[50px] rounded-[50%]'/>
      <div className='text-2xl text-primary_dark dark:text-white font-medium'>Home</div>
      <button className='bg-peach_orange text-primary_dark font-semibold text-lg px-5 py-2 my-1 rounded-2xl shadow-md' onClick={toggleDark}>Post Bug</button>
      <button className='bg-peach_orange text-primary_dark font-semibold text-lg px-5 py-2 my-1 rounded-2xl shadow-md' onClick={logout}>logout</button>
    </div>
  )
}

export default Navbar
