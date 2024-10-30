import React, { useState } from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';

const LoginSignup = ({isLoggedIn,setLoggedIn,darkMode,setDarkMode}) => {
    const [newUser,setNewUser] = useState(true);
  return (
    <div className='w-full h-full flex items-center'>
        {
            newUser ?
            <Login setNewUser={setNewUser} newUser={newUser} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />:<Signup setNewUser={setNewUser} newUser={newUser}/>
        }
    </div>
  )
}

export default LoginSignup
