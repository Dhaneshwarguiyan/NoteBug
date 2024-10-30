import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";
import { GoHomeFill } from "react-icons/go";
// import { AiFillAndroid } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sidebar({setLoggedIn}) {
  const s = 25;
  const t = 20;

  const items = [
    {
      icon: <GoHomeFill size={s} />,
      tile: "Home",
      path: "/",
    },
    {
      icon: <IoIosSearch size={s} />,
      tile: "Search",
      path: "/search",
    },
    {
      icon: <IoNotifications size={s} />,
      tile: "Notification",
      path: "/notification",
    },
    {
      icon: <FaBookmark size={t} />,
      tile: "Bookmark",
      path: "/bookmark",
    },
    {
      icon: <CgProfile size={s} />,
      tile: "Profile",
      path: "/profile",
    },
    {
      icon: <HiOutlineMenu size={s} />,
      tile: "More",
    },
  ];
  const [user,setUser] = useState(null);

  async function getProfile() {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/me",
        {
          withCredentials:true
        }
      );
      setUser(response.data);
    } catch (error) {
      setLoggedIn(false);
      console.log(error)
    }
  }

  useEffect(() => {
      getProfile();
  }, []);
  return (
    <div className="flex flex-col justify-between w-1/6 h-full py-2 border-r border-r-light_grey dark:border-r-extra_light_grey">
      <div>
        {items.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {" "}
              <div className="text-primary_dark dark:text-light_grey py-4 text-lg font-semibold flex items-center gap-4 cursor-pointer ">
                {item.icon}
                {item.tile}
              </div>
            </Link>
          );
        })}
      </div>
      {
        user && <div className="flex gap-4 pb-5" >
        <img src={profile} alt="" className="w-[50px] rounded-[50%]" />
        <div className="flex flex-col">
          <span className="text-md font-extrabold text-slate-100 dark:text-light_grey">
            {user.name}
          </span>
          <span className="text-md text-slate-100 font-thin dark:text-light_grey">
            @{user.userName}
          </span>
        </div>
      </div>
      }
    </div>
  );
}
