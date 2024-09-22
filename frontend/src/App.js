
import { useState } from 'react';
import './App.css';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';

function App() {
  const [isLoggedIn,setLoggedIn] = useState(true);
  // const [id, setId] = useState(1);
  return (
   <div className=' bg-slate-900 font-nunito '>
     <div className='h-[100vh] overflow-scroll md:overflow-auto xl:w-[1280px] w-full m-auto'>
        {isLoggedIn ? <Home setLoggedIn = {setLoggedIn} /> : <LoginSignup isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} /> }
     </div>
   </div>
  );
}

export default App;
