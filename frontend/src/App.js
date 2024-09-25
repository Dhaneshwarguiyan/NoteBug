
import { useState } from 'react';
import './App.css';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';

function App() {
  const [isLoggedIn,setLoggedIn] = useState(true);
  // const [id, setId] = useState(1);
  return (
   <div className='dark:bg-white bg-primary_dark font-nunito '>
     <div className='h-[100vh] overflow-scroll md:overflow-auto xl:max-w-[1480px] w-[90%] m-auto' >
        {isLoggedIn ? <Home setLoggedIn = {setLoggedIn} /> : <LoginSignup isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} /> }
     </div>
   </div>
  );
}

export default App;
