import React from "react";
import prfImg from "../assets/signup.svg";

const Posts = () => {
  return (
    <div className="flex gap-2 py-2 border-y shadow-md">
      <div className="mt-5 rounded-[50%]">
        <img src={prfImg} alt="" className="w-[70px]" />
      </div>
      <div className="w-full">
        <h1 className="text-slate-100 text-2xl font-medium">
          Problem while sharing cookies via diffrent ports..
        </h1>
        <div className="text-md text-slate-200 font-extralight">
          Marta Craig <span>@craig_love.12h</span>
        </div>
        <div className="text-slate-200 font-normal">
          Enabled credentials = true in cors configuration
        </div>
        <div className="text-slate-200 font-normal">
          Enabled with credentials = true http request body
        </div>
        
      </div>
    </div>
  );
};

export default Posts;
