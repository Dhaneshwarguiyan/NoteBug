import React, { useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import profile from "../assets/profile.jpeg";
import axios from "axios";

const size = 23;
const items = [
  <FaRegImage color="rgb(95, 108, 175)" size={size-2} />,

  <BsEmojiSmileFill color="rgb(95, 108, 175)" size={size-2} />,
  <FaCode color="rgb(95, 108, 175)" size={size} />,
  <FaPencilAlt color="rgb(95, 108, 175)" size={size-2} />,
];


const Upload = ({posts,setPosts}) => {
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

  async function submitHandler(){
        try {
           const response  = await axios.post('http://localhost:8000/api/v1/posts',{
            title:formData.title,
            description:formData.description
          },{
            withCredentials:true
          })
          setFormData({
            title:"",
            description:""
          })
          setPosts([...posts,response.data])
        } catch (error) {
          console.log(error);
        }
  }

  return (
    <div className=" flex gap-5  px-5 py-3 dark:text-light_grey">
      <img src={profile} alt="" className="h-[50px] rounded-[50%] mt-3" />
      <div className="w-full">
        <textarea
          name="title"
          placeholder="Title of the bug"
          onChange={handleChange}
          value={formData.title}
          className="w-full bg-extra_light_grey resize-none  outline-none text-slate-100 text-lg p-2 border dark:border-extra_light_grey border-light_grey rounded-lg h-[47px] shadow-sm "
        ></textarea>
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          className="w-full bg-extra_light_grey resize-none outline-none text-slate-100 text-lg p-2 mt-5 border dark:border-extra_light_grey border-light_grey rounded-lg h-[120px] no-scrollbar shadow-sm"
        ></textarea>
        <div className="flex justify-between px-2 mt-2">
          <div className="flex gap-8">
            {items.map((item,index) => {
              return <div className="cursor-pointer" key={index}>{item}</div>;
            })}
          </div>
          <button className="bg-peach_orange shadow-md text-lg px-8 py-1.5 rounded-2xl text-primary_dark" onClick={submitHandler}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
