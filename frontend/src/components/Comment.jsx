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
    <div className="w-full flex justify-between items-center">
        <img src={profile} alt="" className="rounded-[50%] w-[40px] h-[40px]"/>
      <input
        type="text"
        name="comment"
        placeholder="Comment"
        value={comment}
        onChange={changeHandler}
        className="outline-none resize-none rounded-3xl text-lg bg-transparent border border-slate-700 text-slate-100 px-6 py-2 w-[400px]"
      />
      <button className="bg-slate-800 px-7 py-2 rounded-3xl text-lg mr-2" onClick={clickHandler}>Comment</button>
    </div>
  );
};

export default Comment;
