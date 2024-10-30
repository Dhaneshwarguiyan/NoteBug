import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginSignup from './pages/LoginSignup';
import { BrowserRouter } from "react-router-dom";
import "react-toastify/ReactToastify.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  
  useEffect(()=>{
     setLoggedIn(localStorage.getItem("isLoggedIn") === "true")
  },[isLoggedIn])
  // const [id, setId] = useState(1);
  return (
    <div className="bg-white dark:bg-primary_dark font-nunito ">
      <BrowserRouter>
        <div className="h-[100vh] overflow-scroll md:overflow-auto xl:max-w-[1480px] w-[90%] m-auto">
          {isLoggedIn ? <Home setLoggedIn = {setLoggedIn}  darkMode={darkMode} setDarkMode={setDarkMode}/> : <LoginSignup isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} darkMode={darkMode} setDarkMode={setDarkMode}/> }
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
