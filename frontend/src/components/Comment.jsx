import React, { useState } from "react";
import profile from "../assets/profile.jpeg";

const Comment = () => {
  const [comment, setComment] = useState("");
  
  function changeHandler(e) {
    const { value } = e.target;
    setComment(value);
  }
  function clickHandler(){
    console.log(comment);
  }
  return (
    <div className="w-3/4 flex items-center gap-3">
        <img src={profile} alt="" className="rounded-[50%] w-[40px] h-[40px]"/>
      <input
        type="text"
        name="comment"
        placeholder="Comment"
        value={comment}
        onChange={changeHandler}
        className="outline-none resize-none rounded-3xl text-lg bg-transparent border border-slate-700 text-slate-100 px-6 py-2 w-[60%]"
      />
      <button className='bg-peach_orange text-primary_dark font-semibold text-lg px-5 py-2 my-1 rounded-3xl shadow-md' onClick={clickHandler}>Comment</button>
      {/* <button className="bg-slate-800 px-7 py-2 rounded-3xl text-lg mr-2" onClick={clickHandler}>Comment</button> */}
    </div>
  );
};

export default Comment;
