import React, { useState } from "react";
import profile from "../assets/profile.jpeg";

const People = () => {
    const [isFollow,setFollow] = useState(false);
  return (
    <div className="text-slate-100 flex items-center gap-2">
      <img src={profile} alt="" className="w-[50px] h-[50%] rounded-[50%]" />
      <span className="flex flex-col">
        <span className="font-medium">Biscut</span>
        <span className="font-thin">@baba</span>
      </span>
      <button className="bg-white text-slate-900 px-3 py-1 rounded-2xl ml-1" onClick={()=>setFollow(!isFollow)}>{isFollow ? 'following':'follow'}</button>
    </div>
  );
};

export default People;
