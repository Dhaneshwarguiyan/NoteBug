import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import profile from "../assets/profile.jpeg";

const size = 21;
const items = [
  <FaRegImage color="rgb(34, 197, 94)" size={size-5} />,

  <BsEmojiSmileFill color="rgb(34, 197, 94)" size={size-2} />,
  <FaCode color="rgb(34, 197, 94)" size={size} />,
  <FaPencilAlt color="rgb(34, 197, 94)" size={size-2} />,
];


const Upload = () => {
  const [formData,setFormData] = useState({
    title:"",
    description:""
  })

  function handleChange(e){
      const {name,value} = e.target;
      setFormData({...formData,
        [name]:value
      })
  }
  function submitHandler(){
    console.log(formData);
  }

  return (
    <div className=" flex gap-5  px-5 py-3">
      <img src={profile} alt="" className="h-[50px] rounded-[50%] mt-3" />
      <div className="w-full">
        <textarea
          name="title"
          placeholder="Title of the bug"
          onChange={handleChange}
          value={formData.title}
          className="w-full bg-transparent resize-none  outline-none text-slate-100 text-xl p-2 border border-slate-700 rounded-lg h-[47px]"
        ></textarea>
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          className="w-full bg-transparent resize-none outline-none text-slate-100 text-lg p-2 mt-5 border border-slate-700 rounded-lg h-[120px] no-scrollbar"
        ></textarea>
        <div className="flex justify-between px-2 mt-2">
          <div className="flex gap-8">
            {items.map((item,index) => {
              return <div className="cursor-pointer" key={index}>{item}</div>;
            })}
          </div>
          <button className="bg-green-500 px-8 py-1.5 rounded-2xl" onClick={submitHandler}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
