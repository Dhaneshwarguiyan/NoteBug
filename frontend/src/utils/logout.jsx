import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useLogout = ()=> {
    const {setLogin} = useContext(AuthContext);
    return async ()=>{
        await axios.get("http://localhost:8000/api/v1/logout", {
            withCredentials: true,
          });
          setLogin(false);
          localStorage.setItem("login", false);
    }
}

export default useLogout;