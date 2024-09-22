import axios from "axios";
import React, { useState } from "react";
import loginImg from "../assets/login.svg";

const Login = ({ setNewUser, newUser, setLoggedIn }) => {
  let varients = "w-80 px-6 py-3  rounded-xl outline-none shadow-md";
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
    console.log("hello");
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true, // This sends cookies with cross-origin requests
        }
      );
      setLoggedIn(true);
      console.log(response);
    } catch (error) {
      console.log(error.response.data?.msg);
    }
  }
  function setUser() {
    setNewUser(!newUser);
  }
  
  return (
    <div className="w-full lg:w-[95%] 2xl:w-[80%] m-auto lg:h-2/3 h-full bg-slate-200 lg:rounded-2xl">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between md:justify-around items-center">
        {/* left */}
        <div className="lg:bg-slate-400 md:mt-0 mt-5 lg:h-full w-full lg:rounded-l-2xl">
          <img src={loginImg} alt="img" className="mt-8 md:mt-0 w-96 md:w-[70%] lg:h-full lg:w-full m-auto" />
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
              className="bg-green-400 px-16 py-2 mt-4 rounded-lg text-xl text-slate-900 hover:bg-green-500 shadow-lg"
            >
              Signin
            </button>
          </form>
          <p className="font-light mt-4">
            Not registered Yet?{" "}
            <span className="font-medium cursor-pointer mt-4" onClick={setUser}>
              Create an Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
