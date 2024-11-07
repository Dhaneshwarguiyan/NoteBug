import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [login,setLogin] = useState(()=>localStorage.getItem('login') === 'true' || false);
    const [darkMode,setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    const navigate = useNavigate();

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
        if(login){
            navigate('/');
        }else{
            navigate('/login');
        }
    },[login])

    return <AuthContext.Provider value={{login,setLogin, darkMode ,setDarkMode}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;