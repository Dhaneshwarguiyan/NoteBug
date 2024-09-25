import React from "react";
import Upload from "../components/Upload";
import Post from "../components/Post";
const Feed = () => {
  return (
    <div className="w-4/6 h-auto overflow-auto no-scrollbar border-r border-slate-700">
      <Upload />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
