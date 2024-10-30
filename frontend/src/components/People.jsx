import React, { useState } from "react";
import profile from "../assets/profile.jpeg";

const People = ({user}) => {
    const [isFollow,setFollow] = useState(false);
  return (
    <div className="text-slate-100 dark:text-light_grey flex items-center gap-2">
      <img src={profile} alt="" className="w-[40px] rounded-[50%]" />
      <span className="flex flex-col">
        <span className="font-medium">{user.name}</span>
        <span className="font-thin text-sm">@{user.userName}</span>
      </span>
      <button className="bg-white text-slate-900 dark:text-primary_dark px-3 py-1 rounded-2xl ml-1" onClick={()=>setFollow(!isFollow)}>{isFollow ? 'following':'follow'}</button>
    </div>
  );
};

export default People;
