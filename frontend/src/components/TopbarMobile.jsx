import React from "react";
import prfImg from "../assets/login.svg";

const Topbar = ({id}) => {
  const varients = ["Home",<input
    type="text"
    placeholder="Search"
    className="rounded-2xl font-light outline-none text-lg  text-slate-900 w-4/5 mx-8 px-3 py-1"
  />,"Notification","Messages"]
  return (
    <div className="flex justify-between p-3 w-full sticky top-0 bg-slate-800">
      <img src={prfImg} alt="profile" className="w-14" />
      <div className="text-white font-medium text-xl mt-1">{varients[id-1]}</div>
      <img src={prfImg} alt="setting" className="w-14" />
    </div>
  );
};
export default Topbar;
