import axios from "axios";
import loginImg from "../assets/login.svg";
import useLogout from "../utils/logout";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

const Login = () => {
  const logout = useLogout();
  const navigate = useNavigate();
  const { setLogin } = useContext(AuthContext);
  let varients =
    "w-80 px-6 py-3  rounded-xl outline-none shadow-md dark:text-primary_dark";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/v1/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      toast("Signed in")
      setLogin(true);
      localStorage.setItem("login", true);
    } catch (error) {
      logout();
    }
  }

  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full lg:w-[95%] 2xl:w-[80%] m-auto lg:h-2/3 h-full bg-slate-200 lg:rounded-2xl bg-light_grey dark:text-light_grey dark:bg-extra_light_grey">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between md:justify-around items-center">
          {/* left */}
          <div className="lg:bg-slate-400 md:mt-0 mt-5 lg:h-full w-full lg:rounded-l-2xl">
            <img
              src={loginImg}
              alt="img"
              className="mt-8 md:mt-0 w-96 md:w-[70%] lg:h-full lg:w-full m-auto"
            />
          </div>
          {/* right */}
          <div className="w-full lg:w-3/5 md:mb-10 lg:mb-0 mb-20 flex flex-col  items-center justify-center gap-2">
            <h1 className="w-full text-3xl text-center md:text-4xl font-bold text-slate-800  md:mt-0">
              Log into your account
            </h1>
            <div className="font-light">Never Repeat yourselves</div>
            <form
              className="w-full flex flex-col gap-3 items-center md:mt-4 mt-10 "
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={varients}
              />
              <input
                type="Password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={varients}
              />
              <button
                type="submit"
                className="bg-green-400 px-16 py-2 mt-4 rounded-lg text-xl text-slate-900 hover:bg-green-500 shadow-lg bg-peach_orange dark:text-primary_dark"
              >
                Signin
              </button>
            </form>
            <p className="font-light mt-4">
              Not registered Yet?{" "}
              <span
                className="font-medium cursor-pointer mt-4 dark:hover:text-peach_orange"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Create an Account
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
